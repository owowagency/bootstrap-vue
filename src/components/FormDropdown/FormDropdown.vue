<template>
    <Dropdown
        class="form-dropdown"
        v-bind="propsDropdown"
        :items="filteredItems"
        @click:item="emit('update:modelValue', $event)"
    >
        <template #dropdownToggle>
            <FormControl
                v-if="searchable"
                v-model="searchValue"
                data-bs-toggle="dropdown"
                :placeholder="placeholder"
                :size="size"
            />

            <div
                v-else
                class="form-select"
                :class="classes"
                data-bs-toggle="dropdown"
            >
                {{ label }}
            </div>
        </template>

        <template #menuPrepend>
            <slot
                v-if="filteredItems.length === 0"
                name="noOptions"
            >
                <DropdownMenuItem
                    class="pe-none"
                    label="No options"
                />
            </slot>

            <slot name="menuPrepend" />
        </template>

        <template #menuAppend>
            <slot name="menuAppend" />
        </template>
    </Dropdown>
</template>

<script lang="ts">
import {computed, ref, watch} from 'vue';
import useFormSelect, {formSelectProps} from '@/composables/useFormSelect';
import Dropdown from '@/components/Dropdown';
import DropdownMenuItem from '@/components/DropdownMenuItem';
import FormControl from '@/components/FormControl';
import {dropdownProps} from '@/composables/useDropdown';
import useClasses from '@/composables/useClasses';

const {disabled: disabledProp, size: sizeProp} = formSelectProps;
</script>

<script lang="ts" setup>
const props = defineProps({
    ...dropdownProps,
    autoSearch: {
        type: Boolean,
        default: true,
    },
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
    search: {
        type: String,
        default: '',
    },
    searchable: {
        type: Boolean,
        default: false,
    },
    size: sizeProp,
    toggleClass: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue', 'update:search']);

const {classes} = useClasses(computed(() => [
    ...useFormSelect(props).classes.value,
    props.toggleClass,
]));

const filteredItems = computed(() => {
    if (searchValue.value === '' || !props.autoSearch) {
        return props.items;
    }

    return props.items
        .filter(i =>
            i.label
                .toLowerCase()
                .includes(searchValue.value.toLocaleLowerCase()),
        );
});

const label = computed(() => {
    if (!props.modelValue) {
        if (props.searchable) {
            return '';
        }

        return props.placeholder;
    }

    return props.modelValue[props.labelKey];
});

const propsDropdown = computed(() => {
    const properties = {};

    Object.keys(dropdownProps)
        .forEach(k => properties[k] = props[k]);

    return properties;
});

const searchValue = ref(!props.searchable ? '' : (props.search === '' ? label.value : props.search));

// Update the `search` once the label of the value changes. This happens
// for example when a user clicks on an item. The input should show the label
// of the clicked item..
watch(
    () => props.modelValue,
    v => props.searchable && (searchValue.value = v?.[props.labelKey] || ''),
);

watch(
    () => props.search,
    s => props.searchable && (searchValue.value = s),
);

watch(
    () => searchValue.value,
    s => {
        if (!props.searchable) {
            return;
        }

        if (props.modelValue !== undefined) {
            // Prevent emitting new `update:search` events when the
            // `searchValue` is equal to the label of the `modelValue`.
            if (props.modelValue[props.labelKey] === s) {
                return;
            }

            emit('update:modelValue', undefined);
        }

        emit('update:search', s);
    },
);
</script>
