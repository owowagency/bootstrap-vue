<template>
    <label
        class="form-image"
        :class="{'form-image-has-preview': !!preview}"
        :for="id"
        :style="style"
        @drop="onDrop"
        @dragenter.prevent
        @dragover.prevent
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

        <!-- @slot Displays the placeholder -->
        <slot
            v-else
            name="placeholder"
        />
    </label>
</template>

<script lang="ts">
import {PropType, computed, ref, watch} from 'vue';
import {DataType} from '@/components/FormImage/type';
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * The data type of the model
     * @values 'file'|'base64'
     */
    dataType: {
        type: String as PropType<DataType>,
        default: 'base64',
    },
    ...idProps,
    /**
     * The model value
     */
    modelValue: {
        type: [Object, String] as PropType<File|string>,
        default: undefined,
    },
    /**
     * The preview
     */
    preview: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits<{
    /**
     * Fired when the model value is updated
     * @param {string|File} value The new value
     */
    (e: 'update:modelValue', value: string|File): void,
}>();

// Rollup cannot handle HTMLInputElement as ref, cannot
const input = ref();

const file = ref<File|undefined>();

const readerResult = ref<string|undefined>();

const preview = computed(() => readerResult.value || props.preview);

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
        readerResult.value = reader.result as string;

        if (props.dataType === 'base64') {
            value.value = reader.result as string;
        }
    };

    reader.readAsDataURL(file);

    return reader;
};
</script>

<docs>
```vue
<FormImage
    v-model="b64"
    type="base64"
/>
```

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | `uuid`  |
</docs>
