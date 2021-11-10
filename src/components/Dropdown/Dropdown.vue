<template>
    <div class="dropdown">
        <slot name="dropdownToggle">
            <Btn
                class="dropdown-toggle"
                data-bs-toggle="dropdown"
                :size="size"
                :variant="variant"
            >
                <slot>
                    Select
                </slot>
            </Btn>
        </slot>

        <DropdownMenu
            :items="items"
            :class="menuClass"
            @click:item="clickItem($event)"
        />
    </div>
</template>

<script lang="ts">
import {dropdownProps} from '../../composables/useDropdown';
</script>

<script lang="ts" setup>
import {Item} from '../../composables/useDropdownItems';
import Btn from '../Button';
import DropdownMenu from '../DropdownMenu';

defineProps(dropdownProps);

const emit = defineEmits(['click:item']);

const clickItem = (item: Item) => emit('click:item', item);
</script>
