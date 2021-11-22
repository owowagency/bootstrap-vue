<template>
    <label
        class="form-image"
        :for="id"
        :style="style"
        @drop="onDrop"
        @dragenter="cancelDrag"
        @dragover="cancelDrag"
    >
        <input
            :id="id"
            ref="input"
            accept="image/*"
            hidden
            type="file"
            @change="onChange"
        >

        <div
            v-if="preview"
            class="form-image-btn-edit"
        />
    </label>
</template>

<script lang="ts">
import {PropType, computed, ref, watch} from 'vue';
import {idProps} from '@/composables/useId';

export const dataTypes = ['file', 'base64'] as const;

export type DataType = typeof dataTypes[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    dataType: {
        type: String as PropType<DataType>,
        default: 'base64',
    },
    ...idProps,
    modelValue: {
        type: [Object, String] as PropType<File|string>,
        default: undefined,
    },
    preview: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: string|File): void,
}>();

const input = ref<HTMLInputElement>();

const preview = ref<string|undefined>(props.preview);

const file = ref<File|undefined>();

const style = computed(() => {
    if (!preview.value) {
        return {};
    }

    return {
        'background-color': 'transparent',
        'background-image': `url(${preview.value})`,
        'background-size': 'cover',
    };
});

const value = computed<string|File|undefined>({
    get: () => props.modelValue,
    set: (v?: string|File) => emit('update:modelValue', v),
});

watch(file, f => readFile(f));

const cancelDrag = (e: Event) => e.preventDefault();

const onChange = (e: {target: HTMLInputElement}) => {
    const newFile = e.target.files.item(0);

    if (newFile?.type.match('image.*')) {
        file.value = newFile;

        return true;
    }

    return false;
};

const onDrop = (e: DragEvent) => {
    e.preventDefault();

    input.value.files = e.dataTransfer.files;

    onChange({target: input.value});
};

const readFile = (file: File) => {
    if (!file) {
        return value.value = undefined;
    }

    if (props.dataType === 'file') {
        value.value = file;
    }

    const reader = new FileReader();

    reader.onload = () => {
        preview.value = reader.result as string;

        if (props.dataType === 'base64') {
            value.value = reader.result as string;
        }
    };

    reader.readAsDataURL(file);

    return reader;
};
</script>
