<template>
    <ul class="dropdown-menu">
        <!-- @slot Prepends the dropdown menu -->
        <slot name="prepend" />

        <!--
        @slot Displays content inside the dropdown menu
        @binding {array} items The `Item` list
        @binding {function} click-item The function to call when an item is clicked
        -->
        <slot
            name="items"
            :click-item="clickItem"
            :items="items"
        >
            <template
                v-for="(item, index) of items"
                :key="`item-${index.toString()}`"
            >
                <!--
                @slot Displays the dropdown menu item
                @binding {object} item The `Item` object
                @binding {function} click-item The function to call when an item is clicked
                -->
                <slot
                    name="item"
                    :click-item="clickItem"
                    :item="item"
                >
                    <DropdownMenuItem
                        v-bind="item"
                        :item-class="itemClass"
                        @click="clickItem(item)"
                    />
                </slot>
            </template>
        </slot>

        <!-- @slot Appends the dropdown menu -->
        <slot name="append" />
    </ul>
</template>

<script lang="ts">
import {Item, dropdownItemsProps} from '@/composables/useDropdownItems';
import DropdownMenuItem from '@/components/DropdownMenuItem';
import {dropdownItemProps} from '@/composables/useDropdownItem';
</script>

<script lang="ts" setup>
defineProps({
    ...dropdownItemProps,
    ...dropdownItemsProps,
});

const emit = defineEmits([
    /**
     * Fired when an item is clicked
     * @param {Item} item The item that was clicked
     */
    'click:item',
]);

const clickItem = (item: Item) => emit('click:item', item);
</script>

<docs>
```vue
<DropdownMenu :items="[Item]" />
```

## Imported Props

| Prop name | Description                    | Type                                         | Values | Default  |
| --------- | ------------------------------ | -------------------------------------------- | ------ | -------- |
| items     | The items of the dropdown menu | [Item[]](../../composables/useDropdownItems) | -      | () => [] |
</docs>
