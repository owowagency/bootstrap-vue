<template>
    <Dropdown
        class="form-dropdown"
        v-bind="propsDropdown"
        :items="filteredItems"
        @click:item="emit('update:modelValue', $event)"
    >
        <template #dropdownToggle>
            <FormControl
                v-if="search"
                v-model="searchQuery"
                :size="size"
                data-bs-toggle="dropdown"
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
                name="noItems"
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
import useFormSelect, {formSelectProps} from '@/composables/useFormSelect';
import {computed, ref, watch} from 'vue';
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
        type: Boolean,
        default: false,
    },
    searchItems: {
        type: Boolean,
        default: true,
    },
    searchQuery: {
        type: String,
        default: '',
    },
    size: sizeProp,
    toggleClass: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue', 'update:searchQuery']);

const {classes} = useClasses(computed(() => [
    ...useFormSelect(props).classes.value,
    props.toggleClass,
]));

const filteredItems = computed(() => {
    if (searchQuery.value === '' || !props.searchItems) {
        return props.items;
    }

    return props.items
        .filter(i =>
            i.label
                .toLowerCase()
                .includes(searchQuery.value.toLocaleLowerCase()),
        );
});

const label = computed(() => {
    if (!props.modelValue) {
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

const searchQuery = ref(props.searchQuery);

// Update the `searchQuery` once the label of the value changes. This happens
// for example when a user clicks on an item. The input should show the label
// of the clicked item.
watch(
    () => props.modelValue,
    v => props.search ? (searchQuery.value = v?.[props.labelKey] || '') : false,
);

watch(
    () => props.searchQuery,
    s => props.search ? (searchQuery.value = s) : false,
);

watch(
    () => searchQuery.value,
    s => {
        if (!props.search) {
            return;
        }

        if (props.modelValue !== undefined) {
            // Prevent emitting new `update:searchQuery` events when the
            // `searchQuery` is equal to the label of the `modelValue`.
            if (props.modelValue[props.labelKey] === s) {
                return;
            }

            emit('update:modelValue', undefined);
        }

        emit('update:searchQuery', s)
    },
);
</script>
