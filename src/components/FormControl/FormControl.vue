<template>
    <input
        ref="input"
        :autofocus="autofocus"
        class="form-control"
        :class="classes"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    >
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import {formControlProps} from '@/composables/useFormControl';
import useClasses from '@/composables/useClasses';
import useDisabled from '@/composables/useDisabled';
import useSize from '@/composables/useSize';
</script>

<script lang="ts" setup>
const props = defineProps(formControlProps);

const emit = defineEmits([
    /**
     * Fired when the model value is updated
     * @param {any} value The new value
     */
    'update:modelValue',
]);

const input = ref<HTMLInputElement>();

const {classes} = useClasses(computed(() => [
    useDisabled(props.disabled).disabledClass.value,
    props.plainText ? 'form-control-plaintext' : '',
    props.readonly ? 'readonly' : '',
    useSize(props.size, 'form-control-{0}').sizeClass.value,
]));

defineExpose({input});
</script>

<docs>
```vue
<FormControl
    name="username"
    v-model="username"
    placeholder="JohnDoe"
/>
```

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| modelValue  | The model value                              | string                                            | -      | ''      |
| placeholder | The placeholder of the form input            | string                                            | -      | ''      |
| plainText   | Adds the `form-control-plaintext` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |
</docs>
