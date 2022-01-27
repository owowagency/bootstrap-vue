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

        <slot
            name="dropdownMenu"
            :clickItem="clickItem"
            :items="items"
        >
            <DropdownMenu
                :items="items"
                :class="menuClass"
                @click:item="clickItem($event)"
            >
                <!-- Rollup does not dynamically overriding child slots.
                <template
                    v-for="slotName in menuSlots"
                    #[slotName]="slotScope"
                >
                    <slot
                        :name="slotName"
                        v-bind="slotScope"
                    />
                </template> -->

                <template #prepend="slotScope">
                    <slot
                        name="prepend"
                        v-bind="slotScope"
                    />
                </template>

                <template #items="slotScope">
                    <slot
                        name="items"
                        v-bind="slotScope"
                    />
                </template>

                <template #item="slotScope">
                    <slot
                        name="item"
                        v-bind="slotScope"
                    />
                </template>

                <template #append="slotScope">
                    <slot
                        name="append"
                        v-bind="slotScope"
                    />
                </template>
            </DropdownMenu>
        </slot>
    </div>
</template>

<script lang="ts">
import Btn from '@/components/Button';
import DropdownMenu from '@/components/DropdownMenu';
import {Item} from '@/composables/useDropdownItems';
import {dropdownProps} from '@/composables/useDropdown';
</script>

<script lang="ts" setup>
defineProps(dropdownProps);

const emit = defineEmits(['click:item']);

const clickItem = (item: Item) => emit('click:item', item);

// Rollup does not like dynamically overriding slots so this is not used for now.
const menuSlots = [
    'prepend',
    'items',
    'item',
    'append',
];
</script>
