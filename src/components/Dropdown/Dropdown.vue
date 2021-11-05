<template>
    <div class="dropdown">
        <Btn
            class="dropdown-toggle"
            data-bs-toggle="dropdown"
            :size="size"
            :variant="variant"
        >
            <slot />
        </Btn>

        <DropdownMenu
            :items="items"
            @click:item="clickItem($event)"
        />
    </div>
</template>

<script lang="ts" setup>
import {Item, dropdownItemsProps} from '../../composables/useDropdownItems';
import Btn from '../Button';
import DropdownMenu from '../DropdownMenu';
import {sizeProps} from '../../composables/useSize';
import {variantProps} from '../../composables/useVariant';

defineProps({
    ...dropdownItemsProps,
    ...sizeProps,
    ...variantProps,
});

const emit = defineEmits(['click:item']);

const clickItem = (item: Item) => emit('click:item', item);
</script>
