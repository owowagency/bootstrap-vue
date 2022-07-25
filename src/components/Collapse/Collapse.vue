<template>
    <!--
    @slot Displays the toggle for the collapse
    @binding {string} id The id of the target collapse
    -->
    <slot
        :id="id"
        name="toggle"
    >
        <div
            class="collapse-toggle"
            data-bs-toggle="collapse"
            :data-bs-target="`#${id}`"
            v-bind="$attrs"
        >
            <!--
            @slot Displays the content for the toggle
            @binding {string} id The id of the target collapse
            -->
            <slot
                :id="id"
                name="toggleContent"
            />
        </div>
    </slot>

    <div
        :id="id"
        ref="collapse"
        class="collapse"
        :data-bs-parent="parentSelector"
    >
        <!--
        @slot Displays the content of the collapse
        @binding {string} id The id of the collapse
        -->
        <slot :id="id" />
    </div>
</template>

<script lang="ts">
import {idProps} from '@/composables/useId';
import {ref} from 'vue';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';

const collapseEvents = ['show', 'shown', 'hide', 'hidden'] as const;

type CollapseEvent = typeof collapseEvents[number];
</script>

<script lang="ts" setup>
defineProps({
    ...idProps,
    /**
     * The selector of the parent element
     * *This should be a valid query selector*
     */
    parentSelector: {
        type: String,
        default: null,
    },
});

const emit = defineEmits<{(event: CollapseEvent): void}>();

const collapse = ref<HTMLElement>();

useBootstrapEmits(
    collapse,
    collapseEvents,
    emit,
    'collapse',
);

const {bsInstance: bsCollapse} = useBootstrapInstance(
    'Collapse',
    collapse,
    {toggle: false},
);

defineExpose({bsCollapse});
</script>

<docs>
```vue
<Collapse parent-selector="#parent">
    <template #toggle-content="{id}">
        <Button
            data-bs-toggle="collapse"
            :data-bs-target="'#' + id"
        >
            Open me
        </Button>
    </template>

    <Card text="This panel is hidden by default but revealed when the user activates the relevant trigger." />
</Collapse>
```

<!-- TODO Auto-generate based on type? -->
## Events

| Name   | Args | Description                                                                   |
| ------ | ---- | ----------------------------------------------------------------------------- |
| show   |      | This event fires immediately when the `show` instance method is called        |
| shown  |      | This event is fired when a collapse element has been made visible to the user |
| hide   |      | This event is fired immediately when the `hide` method has been called        |
| hidden |      | This event is fired when a collapse element has been hidden from the user     |
</docs>
