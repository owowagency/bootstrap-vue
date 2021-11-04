<template>
    <div
        class="badge"
        :class="classes"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import {computed, defineProps} from 'vue';
import useVariant, {variantProps} from '@/composables/useVariant';
import useClasses from '@/composables/useClasses';

const props = defineProps({
    pill: {
        type: Boolean,
        default: false,
    },
    ...variantProps,
});

const {classes} = useClasses([
    computed(() => props.pill ? 'rounded-pill' : undefined).value,
    useVariant(props.variant, 'bg-{0}').variantClass.value,
]);
</script>
