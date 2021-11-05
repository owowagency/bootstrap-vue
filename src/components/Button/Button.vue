<template>
    <button
        class="btn"
        :class="classes"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
import useDisabled, {disabledProps} from '../../composables/useDisabled';
import useSize, {sizeProps} from '../../composables/useSize';
import useVariant, {variantProps} from '../../composables/useVariant';
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    ...disabledProps,
    outline: {
        type: Boolean,
        default: false,
    },
    ...sizeProps,
    ...variantProps,
});

const variantClassTemplate = computed(() => `btn-${props.outline ? 'outline-' : ''}{0}`);

const {classes} = useClasses([
    useDisabled(props.disabled).disabledClass.value,
    useSize(props.size, 'btn-{0}').sizeClass.value,
    useVariant(props.variant, variantClassTemplate.value).variantClass.value,
]);
</script>
