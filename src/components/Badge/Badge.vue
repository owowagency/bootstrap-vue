<template>
    <div
        class="badge"
        :class="classes"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import useVariant, {variantProps} from '../../composables/useVariant';
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    pill: {
        type: Boolean,
        default: false,
    },
    ...variantProps,
});

const {classes} = useClasses(computed(() => [
    computed(() => props.pill ? 'rounded-pill' : undefined).value,
    useVariant(props.variant, 'bg-{0}').variantClass.value,
]));
</script>
