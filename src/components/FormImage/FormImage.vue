<template>
    <label
        class="form-image"
        :for="id"
        :style="style"
    >
        <input
            :id="id"
            hidden
            type="file"
            @change="onChange"
        >
    </label>
</template>

<script lang="ts">
import {PropType, computed, ref, watch} from 'vue';
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...idProps,
    modelValue: {
        type: Object as PropType<File>,
        default: undefined,
    },
    preview: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue']);

const preview = ref<string|undefined>(props.preview);

const file = computed<File|undefined>({
    get: () => props.modelValue,
    // TODO: Emit different when base64
    set: (v?: File) => emit('update:modelValue', v),
});

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

watch(file, (f) => {
    if (!f) {
        return;
    }

    // TODO: base64

    const reader = new FileReader();

    reader.onload = () => {
        preview.value = reader.result as string;
    };

    reader.readAsDataURL(f);
});

const onChange = (e: Event) => {
    const newFile = (e.target as HTMLInputElement).files![0];

    if (!newFile) {
        return;
    }

    file.value = newFile;
};
</script>
