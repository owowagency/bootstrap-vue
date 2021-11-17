<template>
    <div :class="classes" />
</template>

<script lang="ts">
import {PropType, computed, toRef} from 'vue';
import useSize, {sizeProps} from '../../composables/useSize';
import useVariant, {variantProps} from '../../composables/useVariant';
import useClasses from '../../composables/useClasses';
import useStringTemplate from '../../composables/useStringTemplate';

export const types = ['border', 'grow'] as const;

type Type = typeof types[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    ...sizeProps,
    type: {
        type: String as PropType<Type>,
        default: 'border',
        validator: (t: Type) => types.includes(t),
    },
    ...variantProps,
});

const spinnerClass = useStringTemplate('spinner-{0}', toRef(props, 'type')).templatedString;

const {classes} = useClasses(computed(() => [
    useSize(props.size, `${spinnerClass.value}-{0}`).sizeClass.value,
    spinnerClass.value,
    useVariant(props.variant, 'text-{0}').variantClass.value,
]));
</script>

