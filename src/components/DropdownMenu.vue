<template>
    <ul class="dropdown-menu">
        <li
            v-for="(item, index) of items"
            :key="`item-${index}`"
        >
            <hr
                v-if="item.divider"
                class="dropdown-divider"
            >

            <h6
                v-else-if="item.header"
                class="dropdown-header"
            >
                {{ item.label }}
            </h6>

            <a
                v-else
                class="dropdown-item"
                :class="{active: item.active}"
                href="#"
                @click.prevent="clickItem(item)"
            >
                {{ item.label }}
            </a>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import {Item, dropdownItemsProps} from '@/composables/useDropdownItems';
import {defineEmits, defineProps} from 'vue';

defineProps(dropdownItemsProps);

const emit = defineEmits(['click:item']);

const clickItem = (item: Item) => emit('click:item', item);
</script>
