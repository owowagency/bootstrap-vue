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

        <template
            v-for="slotName in dropdownMenuSlots"
            #[slotName]="slotScope"
        >
            <slot
                :name="slotName"
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

const dropdownMenuSlots = [
    'items',
    'item',
    'append',
];
</script>
