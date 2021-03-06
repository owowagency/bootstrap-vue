<template>
    <div
        ref="dropdown"
        class="dropdown"
    >
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
            v-bind="{'onClick:item': $attrs['onClick:item']}"
            :items="items"
        >
            <DropdownMenu
                :items="items"
                :class="menuClass"
                v-bind="{'onClick:item': $attrs['onClick:item']}"
            >
                <!-- Rollup does not dynamically overriding child slots. See issue #35
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
import {dropdownProps} from '@/composables/useDropdown';
import {ref} from 'vue';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';

const dropdownEvents = ['show', 'shown', 'hide', 'hidden'] as const;

type DropdownEvent = typeof dropdownEvents[number];
</script>

<script lang="ts" setup>
defineProps(dropdownProps);

const emit = defineEmits<{(event: DropdownEvent): void}>();

const dropdown = ref<HTMLElement>();

useBootstrapEmits(
    dropdown,
    dropdownEvents,
    emit,
    'dropdown',
);

const {bsInstance: bsDropdown} = useBootstrapInstance(
    'Dropdown',
    dropdown,
);

// Rollup does not like dynamically overriding slots so this is not used for now.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const menuSlots = [
    'prepend',
    'items',
    'item',
    'append',
];

defineExpose({bsDropdown});
</script>
