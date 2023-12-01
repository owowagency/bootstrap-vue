<template>
    <div
        :id="id"
        ref="offcanvas"
        class="offcanvas"
        :class="classes"
        :data-bs-backdrop="backdrop"
        :data-bs-scroll="scroll"
    >
        <div
            v-if="!!$slots.header || !!header"
            class="offcanvas-header"
        >
            <!-- @slot Displays content inside the header of the offcanvas -->
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div :class="{'offcanvas-body': !noBody}">
            <!-- @slot Displays the body of the offcanvas -->
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import usePlacement, {placementProps} from '@/composables/usePlacement';
import {idProps} from '@/composables/useId';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';
import useClasses from '@/composables/useClasses';

const offcanvasEvents = ['show', 'shown', 'hide', 'hidden', 'hidePrevented'] as const;

type OffcanvasEvent = typeof offcanvasEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * Defines if a backdrop should be shown
     */
    backdrop: {
        type: Boolean,
        default: true,
    },
    /**
     * The header text of the offcanvas
     */
    header: {
        type: String,
        default: undefined,
    },
    ...idProps,
    /**
     * Defines if the `offcanvas-body` class should be omitted
     */
    noBody: {
        type: Boolean,
        default: false,
    },
    ...placementProps,
    /**
     * Defines if the main content should be scrollable when offcanvas is opened
     */
    scroll: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the offcanvas is shown
     */
    show: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{(event: OffcanvasEvent): void}>();

const offcanvas = ref<HTMLElement>();

useBootstrapEmits(
    offcanvas,
    offcanvasEvents,
    emit,
    'offcanvas',
);

const {bsInstance: bsOffcanvas} = useBootstrapInstance(
    'Offcanvas',
    offcanvas,
);

const {classes} = useClasses(computed(() => [
    usePlacement(props.placement, 'offcanvas-{0}').placementClass.value,
    computed(() => props.show ? 'show' : undefined).value,
]));

defineExpose({bsOffcanvas});
</script>

<docs>
```vue
<Offcanvas header="Navigation">
    <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Docs</NavItem>
        <NavItem>About</NavItem>
    </Nav>
</Offcanvas>
```

## Imported Props

| Prop name | Description                    | Type                                            | Values | Default |
| --------- | ------------------------------ | ----------------------------------------------- | ------ | ------- |
| id        | The id used for the component  | string                                          | -      | `uuid`  |
| placement | The placement of the component | [Size](../../composables/usePlacement) (string) | -      | 'start' |

<!-- TODO Auto-generate based on type? -->
## Events

| Name          | Args | Description                                                                                                               |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| show          |      | This event fires immediately when the `show` instance method is called                                                    |
| shown         |      | This event is fired when an offcanvas element has been made visible to the user                                           |
| hide          |      | This event is fired immediately when the `hide` instance method has been called                                           |
| hidden        |      | This event is fired when an offcanvas element has been hidden from the user                                               |
| hidePrevented |      | This event is fired when the offcanvas is shown, its backdrop is static and a click outside of the offcanvas is performed |
</docs>
