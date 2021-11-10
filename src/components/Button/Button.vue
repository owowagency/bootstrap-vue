<template>
    <button
        class="btn"
        :class="classes"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import {disabledProps} from '../../composables/useDisabled';
import {sizeProps} from '../../composables/useSize';
import {variantProps} from '../../composables/useVariant';
</script>

<script lang="ts" setup>
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';
import useDisabled from '../../composables/useDisabled';
import useSize from '../../composables/useSize';
import useVariant from '../../composables/useVariant';

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
