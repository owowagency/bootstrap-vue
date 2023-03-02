<template>
    <li>
        <hr
            v-if="divider"
            class="dropdown-divider"
        >

        <h6
            v-else-if="header"
            class="dropdown-header"
        >
            <!-- @slot Displays content inside the dropdown menu item. -->
            <slot name="default">
                {{ label }}
            </slot>
        </h6>

        <a
            v-else
            class="dropdown-item"
            :class="{active: active}"
            href="#"
            @click.prevent
        >
            <slot name="default">
                {{ label }}
            </slot>
        </a>
    </li>
</template>

<script lang="ts" setup>
defineProps({
    /**
     * Adds the `active` class
     */
    active: {
        type: Boolean,
        default: false,
    },
    /**
     * Displays a divider
     */
    divider: {
        type: Boolean,
        default: false,
    },
    /**
     * Displays label as header
     */
    header: {
        type: Boolean,
        default: false,
    },
    /**
     * The label to display
     */
    label: {
        type: String,
        default: undefined,
    },
});
</script>

<docs>
```vue
<DropdownMenuItem label="Menu item" />
```
</docs>
