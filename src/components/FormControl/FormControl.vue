<template>
    <input
        class="form-control"
        :class="classes"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        :value="modelValue"
    >
</template>

<script lang="ts">
import {computed} from 'vue';
import {formControlProps} from '../../composables/useFormControl';
import useClasses from '../../composables/useClasses';
import useDisabled from '../../composables/useDisabled';
import useSize from '../../composables/useSize';
</script>

<script lang="ts" setup>
const props = defineProps(formControlProps);

const {classes} = useClasses([
    useDisabled(props.disabled).disabledClass.value,
    computed(() => props.plainText ? 'form-control-plaintext' : '').value,
    computed(() => props.readonly ? 'readonly' : '').value,
    useSize(props.size, 'form-control-{0}').sizeClass.value,
]);
</script>
