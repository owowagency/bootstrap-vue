<template>
    <div class="accordion-item">
        <component
            :is="headerTag"
            class="accordion-header"
            :class="headerClass"
        >
            <button
                class="accordion-button collapsed"
                :class="buttonClass"
                data-bs-toggle="collapse"
                :data-bs-target="`#${id}`"
            >
                <!-- @slot Displays the header of the accordion -->
                <slot name="header">
                    {{ header }}
                </slot>
            </button>
        </component>

        <div
            :id="`${id}`"
            class="accordion-collapse collapse"
            :class="collapseClass"
            :data-bs-parent="parentId ? `#${parentId}` : undefined"
        >
            <div
                class="accordion-body"
                :class="bodyClass"
            >
                <!-- @slot Displays the body of the accordion -->
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
defineProps({
    /**
     * The classes that will be forwarded to the body.
     */
    bodyClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    /**
     * The classes that will be forwarded to the button.
     */
    buttonClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    /**
     * The classes that will be forwarded to the collapse.
     */
    collapseClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    /**
     * The text that will be shown in the header.
     */
    header: {
        type: String,
        default: undefined,
    },
    /**
     * The classes that will be forwarded to the header.
     */
    headerClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    /**
     * The html tag that will be used for the header.
     */
    headerTag: {
        type: String,
        default: 'h2',
    },
    /**
     * ID Props test.
     */
    ...idProps,
    /**
     * The id of the parent `Accordion` component.
     */
    parentId: {
        type: String,
        default: undefined,
    },
});
</script>

<docs>
```vue
<AccordionItem header="I'm the header">
    <div>I'm the body</div>
</AccordionItem>
```
</docs>
