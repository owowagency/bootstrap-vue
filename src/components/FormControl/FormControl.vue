<template>
    <input
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
import {computed} from 'vue';
import {formControlProps} from '@/composables/useFormControl';
import useClasses from '@/composables/useClasses';
import useDisabled from '@/composables/useDisabled';
import useSize from '@/composables/useSize';
</script>

<script lang="ts" setup>
const props = defineProps(formControlProps);

const emit = defineEmits(['update:modelValue']);

const {classes} = useClasses(computed(() => [
    useDisabled(props.disabled).disabledClass.value,
    props.plainText ? 'form-control-plaintext' : '',
    props.readonly ? 'readonly' : '',
    useSize(props.size, 'form-control-{0}').sizeClass.value,
]));
</script>
