<template>
    <ul class="dropdown-menu">
        <slot name="prepend" />

        <DropdownMenuItem
            v-for="(item, index) of items"
            :key="`item-${index}`"
            v-bind="item"
            @click="clickItem(item)"
        />

        <slot name="append" />
    </ul>
</template>

<script lang="ts">
import {Item, dropdownItemsProps} from '@/composables/useDropdownItems';
import DropdownMenuItem from '@/components/DropdownMenuItem';
</script>

<script lang="ts" setup>
defineProps(dropdownItemsProps);

const emit = defineEmits(['click:item']);

const clickItem = (item: Item) => emit('click:item', item);
</script>