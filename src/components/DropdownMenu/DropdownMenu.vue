<template>
    <ul class="dropdown-menu">
        <DropdownMenuItem
            v-for="(item, index) of items"
            :key="`item-${index}`"
            v-bind="item"
            @click="clickItem(item)"
        />
    </ul>
</template>

<script lang="ts">
import {dropdownItemsProps} from '../../composables/useDropdownItems';
</script>

<script lang="ts" setup>
import {Item} from '../../composables/useDropdownItems';
import DropdownMenuItem from '../DropdownMenuItem';

defineProps(dropdownItemsProps);

const emit = defineEmits(['click:item']);

const clickItem = (item: Item) => emit('click:item', item);
</script>
