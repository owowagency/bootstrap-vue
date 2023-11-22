<template>
    <component
        :is="tag"
        ref="tooltip"
    >
        <!-- @slot Displays the content of the tooltip -->
        <slot />
    </component>
</template>

<script lang="ts">
import {PropType, computed, onBeforeUnmount, ref} from 'vue';
import {tooltipFallbackPlacementProps, tooltipPlacementProps} from '@/composables/useTooltipPlacement';
import {triggerProps} from '@/composables/useTrigger';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';

const tooltipEvents = ['show', 'shown', 'hide', 'hidden', 'inserted'] as const;

type TooltipEvent = typeof tooltipEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * Overflow constraint boundary of the tooltip
     */
    boundary: {
        type: [String, Object] as PropType<string | HTMLElement>,
        default: 'clippingParents',
    },
    /**
     * Appends the tooltip to the given element
     */
    container: {
        type: [String, Object, Boolean] as PropType<string | HTMLElement | boolean>,
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
     * Delay showing and hiding the tooltip in milliseconds
     */
    delay: {
        type: [Number, Object],
        default: 0,
    },
    /**
     * Defines if HTML is allowed in the tooltip
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
     * Change Bootstrap's default Popper config
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
     * The text to display in the tooltip
     */
    title: {
        type: [String, Number],
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

onBeforeUnmount(() => {
    bsTooltip.value?.dispose();
});

defineExpose({bsTooltip});
</script>

<docs>
```vue
<Tooltip :fallback-placements="['bottom']">
    Insert coin here
</Tooltip>
```

## Imported Props

| Prop name          | Description                                | Type                                                              | Values                                     | Default                            |
| ------------------ | ------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------ | ---------------------------------- |
| fallbackPlacements | The fallback placements of the component   | [TooltipFallbackPlacement](../../composables/useTooltipPlacement) | ['top'\|'bottom'\|'left'\|'right']         | ['top', 'right', 'bottom', 'left'] |
| placement          | The default placement of the component     | [TooltipPlacement](../../composables/useTooltipPlacement)         | ['auto'\|'top'\|'bottom'\|'left'\|'right'] | 'top'                              |
| trigger            | The trigger on which to toggle the trigger | [Trigger](../../composables/useTrigger)                           | ['click'\|'hover'\|'focus'\|'manual']      | ['hover', 'focus']                 |

<!-- TODO Auto-generate based on type? -->
## Events

| Name     | Args | Description                                                                                             |
| -------- | ---- | ------------------------------------------------------------------------------------------------------- |
| show     |      | This event fires immediately when the `show` instance method is called                                  |
| shown    |      | This event is fired when the popover has been made visible to the user                                  |
| hide     |      | This event is fired immediately when the `hide` instance method has been called                         |
| hidden   |      | This event is fired when the popover has finished being hidden from the user                            |
| inserted |      | This event is fired after the show.bs.tooltip event when the tooltip template has been added to the DOM |
</docs>
