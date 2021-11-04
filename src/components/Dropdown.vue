<template>
    <div class="dropdown">
        <Btn
            class="dropdown-toggle"
            data-bs-toggle="dropdown"
            :size="size"
            :variant="variant"
        >
            {{ text }}
        </Btn>

        <DropdownMenu
            :items="items"
            @click="clickItem($event)"
        />
    </div>
</template>

<script lang="ts" setup>
import {Item, dropdownItemsProps} from '@/composables/useDropdownItems';
import {defineEmits, defineProps} from 'vue';
import Btn from '@/components/Button.vue';
import DropdownMenu from '@/components/DropdownMenu.vue';
import {sizeProps} from '@/composables/useSize';
import {variantProps} from '@/composables/useVariant';

defineProps({
    ...dropdownItemsProps,
    ...sizeProps,
    text: {
        type: String,
        required: true,
    },
    ...variantProps,
});

const emit = defineEmits(['click:item']);

const clickItem = (item: Item) => emit('click:item', item);
</script>
