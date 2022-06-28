<template>
    <ul class="dropdown-menu">
        <slot name="prepend" />

        <slot
            name="items"
            :click-item="clickItem"
            :items="items"
        >
            <template
                v-for="(item, index) of items"
                :key="`item-${index}`"
            >
                <slot
                    name="item"
                    :click-item="clickItem"
                    :item="item"
                >
                    <DropdownMenuItem
                        v-bind="item"
                        @click="clickItem(item)"
                    />
                </slot>
            </template>
        </slot>

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
