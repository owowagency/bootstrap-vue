<template>
    <div
        ref="tooltip"
        class="d-inline-block"
    >
        <slot v-if="!!$slots.default" />
    </div>
</template>

<script lang="ts">
import {PropType, computed, ref} from 'vue';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';

const tooltipEvents = ['show', 'shown', 'hide', 'hidden', 'inserted'] as const;

type TooltipEvent = typeof tooltipEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    boundary: {
        type: [String, HTMLElement],
        default: 'clippingParents',
    },
    container: {
        type: [String, HTMLElement, Boolean],
        default: false,
    },
    customClass: {
        type: [String, Array, Object],
        default: '',
    },
    delay: {
        type: [Number, Object],
        default: 0,
    },
    fallbackPlacements: {
        type: Array as PropType<string[]>,
        default: () => ['top', 'right', 'bottom', 'left'],
    },
    html: {
        type: Boolean,
        default: false,
    },
    offset: {
        type: [String, Array],
        default: () => [0, 0],
    },
    placement: {
        type: String,
        default: 'top',
    },
    popperConfig: {
        type: [Object, Function],
        default: () => ({}),
    },
    title: {
        type: String,
        default: '',
    },
    trigger: {
        type: String,
        default: 'hover focus',
    },
});

const tooltip = ref<HTMLElement>();

const emit = defineEmits<{(event: TooltipEvent): void}>();

const tooltipClass = computed(() => {
    if (typeof props.customClass === 'string') {
        return props.customClass;
    }

    if (props.customClass.constructor === Array) {
        return props.customClass.join(' ');
    }

    return Object.keys(props.customClass)
        .filter((key: string) => !!props.customClass[key])
        .join(' ');
});

useBootstrapEmits(
    tooltip,
    tooltipEvents,
    emit,
    'tooltip',
);

const {bsInstance: bsTooltip} = useBootstrapInstance(
    'Tooltip',
    tooltip,
    {
        ...props,
        customClass: tooltipClass.value,
    },
);

defineExpose({bsTooltip});
</script>
