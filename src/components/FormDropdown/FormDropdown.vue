<template>
    <Dropdown
        class="form-dropdown"
        v-bind="propsDropdown"
        @click:item="emit('update:modelValue', $event)"
    >
        <template #dropdownToggle>
            <slot name="dropdownToggle">
                <div
                    class="form-select"
                    data-bs-toggle="dropdown"
                    :class="classes"
                >
                    {{ label }}
                </div>
            </slot>
        </template>

        <template #prepend>
            <slot
                v-if="items.length === 0"
                name="noOptions"
            >
                <DropdownMenuItem
                    class="pe-none"
                    label="No options"
                />
            </slot>

            <slot name="prepend" />
        </template>

        <!-- Rollup does not dynamically overriding child slots. See issue #35
        <template
            v-for="slotName in dropdownMenuSlots"
            #[slotName]="slotScope"
        >
            <slot
                :name="slotName"
                v-bind="slotScope"
            />
        </template> -->

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
    </Dropdown>
</template>

<script lang="ts">
import useFormSelect, {formSelectProps} from '@/composables/useFormSelect';
import Dropdown from '@/components/Dropdown';
import DropdownMenuItem from '@/components/DropdownMenuItem';
import {computed} from 'vue';
import {dropdownProps} from '@/composables/useDropdown';
import useClasses from '@/composables/useClasses';

const {disabled: disabledProp, size: sizeProp} = formSelectProps;
</script>

<script lang="ts" setup>
const props = defineProps({
    ...dropdownProps,
    disabled: disabledProp,
    labelKey: {
        type: String,
        default: 'label',
    },
    menuClass: {
        type: String,
        default: 'w-100',
    },
    modelValue: {
        type: Object,
        default: undefined,
    },
    placeholder: {
        type: String,
        default: 'Select',
    },
    size: sizeProp,
    toggleClass: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue']);

const propsDropdown = computed(() => {
    const properties = {};

    Object.keys(dropdownProps)
        .forEach(k => properties[k] = props[k]);

    return properties;
});

const label = computed(() => {
    if (!props.modelValue) {
        return props.placeholder;
    }

    return props.modelValue[props.labelKey];
});

const {classes} = useClasses(computed(() => [
    ...useFormSelect(props).classes.value,
    props.toggleClass,
]));

// Rollup does not like dynamically overriding slots so this is not used for now.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dropdownMenuSlots = [
    'items',
    'item',
    'append',
];
</script>
