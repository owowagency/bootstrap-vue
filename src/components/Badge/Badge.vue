<template>
    <div
        class="badge"
        :class="classes"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import {variantProps} from '../../composables/useVariant';
</script>

<script lang="ts" setup>
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';
import useVariant from '../../composables/useVariant';

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
