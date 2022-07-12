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
import {PropType} from 'vue';

const props = defineProps({
    /**
     * ?
     */
    boundary: {
        type: [String, Object] as PropType<string | HTMLElement>,
        default: 'clippingParents',
    },
    /**
     * ?
     */
    container: {
        type: [String, HTMLElement, Boolean],y
        default: false,
    },
    /**
     * The classes that will be forwarded to the tooltip
     */
    customClass: {
        type: [String, Array, Object],
        default: '',
    },
    /**
     * ?
     */
    delay: {
        type: [Number, Object],
        default: 0,
    },
    /**
     * ?
     */
    html: {
        type: Boolean,
        default: false,
    },
    /**
     * The x, y offset of the tooltip
     */
    offset: {
        type: [String, Array] as PropType<string | number[]>,
        default: () => [0, 0],
    },
    /**
     * ?
     */
    popperConfig: {
        type: [Object, Function],
        default: () => ({}),
    },
    /**
     * The tag to be used for the list group item
     */
    tag: {
        type: String,
        default: 'div',
    },
    /**
     * ?
     */
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

<docs>
<!-- TODO Document the events -->
```vue
<Tooltip>
    Insert coin here
</Tooltip>
```

## Imported Props

| Prop name | Description                   | Type                                       | Values | Default |
| --------- | ----------------------------- | ------------------------------------------ | ------ | ------- |
| fallbackPlacements | The size of the component     | [Size](../../composables/useSize) (string) | -      | 'md'    |
| placement          | The size of the component     | [Size](../../composables/useSize) (string) | -      | 'md'    |
| trigger            | The size of the component     | [Size](../../composables/useSize) (string) | -      | 'md'    |
</docs>
