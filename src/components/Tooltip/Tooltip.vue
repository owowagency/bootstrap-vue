<template>
    <component
        :is="tag"
        ref="tooltip"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import {PropType, computed, ref} from 'vue';
import {tooltipFallbackPlacementProps, tooltipPlacementProps} from '@/composables/useTooltipPlacement';
import {triggerProps} from '@/composables/useTrigger';
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
    html: {
        type: Boolean,
        default: false,
    },
    offset: {
        type: [String, Array] as PropType<string | number[]>,
        default: () => [0, 0],
    },
    popperConfig: {
        type: [Object, Function],
        default: () => ({}),
    },
    tag: {
        type: String,
        default: 'div',
    },
    title: {
        type: String,
        default: '',
    },
    ...tooltipFallbackPlacementProps,
    ...tooltipPlacementProps,
    ...triggerProps,
});

const tooltip = ref<HTMLElement>();

const emit = defineEmits<{(event: TooltipEvent): void}>();

const tooltipClass = computed(() => {
    if (typeof props.customClass === 'string') {
        return props.customClass;
    }

    if (Array.isArray(props.customClass)) {
        return props.customClass.join(' ');
    }

    return Object.keys(props.customClass)
        .filter((key: string) => !!props.customClass[key])
        .join(' ');
});

const tooltipTriggers = computed(() => {
    if (Array.isArray(props.trigger)) {
        return props.trigger.join(' ');
    }

    return props.trigger;
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
        trigger: tooltipTriggers.value,
    },
);

defineExpose({bsTooltip});
</script>
