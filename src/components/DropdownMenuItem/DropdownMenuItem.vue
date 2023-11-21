<template>
    <li>
        <hr
            v-if="divider"
            class="dropdown-divider"
            :class="itemClass"
        >

        <h6
            v-else-if="header"
            class="dropdown-header"
            :class="itemClass"
        >
            <!-- @slot Displays content inside the dropdown menu item. -->
            <slot name="default">
                {{ label }}
            </slot>
        </h6>

        <Component
            :is="is"
            v-else
            class="dropdown-item"
            :class="[{active: active}, itemClass]"
            :href="href"
            :to="to"
            @click.prevent
        >
            <slot name="default">
                {{ label }}
            </slot>
        </Component>
    </li>
</template>

<script lang="ts" setup>
import {PropType, computed} from 'vue';
import {dropdownItemProps} from '@/composables/useDropdownItem';

const props = defineProps({
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
    ...dropdownItemProps,
    /**
     * Displays label as header
     */
    header: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
        default: '#',
    },
    is: {
        type: String,
        default: undefined,
    },
    /**
     * The label to display
     */
    label: {
        type: String,
        default: undefined,
    },
    to: {
        type: [Object, String] as PropType<string|Record<string, unknown>>,
        default: undefined,
    },
});

const is = computed(() => {
    if (props.is) {
        return props.is;
    }

    if (props.to) {
        return 'RouterLink';
    }

    return 'a';
});
</script>

<docs>
```vue
<DropdownMenuItem label="Menu item" />
```
</docs>
