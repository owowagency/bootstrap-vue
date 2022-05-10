<template>
    <component
        :is="tag"
        class="btn"
        :class="classes"
        :disabled="disabled"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import {buttonProps} from '@/composables/useButton';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
import useDisabled from '@/composables/useDisabled';
import useSize from '@/composables/useSize';
import useVariant from '@/composables/useVariant';
</script>

<script lang="ts" setup>
const props = defineProps(buttonProps);

const variantClassTemplate = computed(() => `btn-${props.outline ? 'outline-' : ''}{0}`);

const {classes} = useClasses(computed(() => [
    useDisabled(props.disabled).disabledClass.value,
    useSize(props.size, 'btn-{0}').sizeClass.value,
    useVariant(props.variant, variantClassTemplate).variantClass.value,
]));
</script>
