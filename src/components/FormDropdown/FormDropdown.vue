<template>
    <Dropdown
        class="form-dropdown"
        v-bind="propsDropdown"
        @click:item="emit('update:modelValue', $event)"
    >
        <template #dropdownToggle>
            <div
                class="form-select"
                data-bs-toggle="dropdown"
                :class="classes"
            >
                {{ label }}
            </div>
        </template>

        <template #menuPrepend>
            <slot name="menuPrepend" />
        </template>

        <template #menuAppend>
            <slot name="menuAppend" />
        </template>
    </Dropdown>
</template>

<script lang="ts">
import useFormSelect, {formSelectProps} from '@/composables/useFormSelect';
import Dropdown from '@/components/Dropdown';
import {computed} from 'vue';
import {dropdownProps} from '@/composables/useDropdown';

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

const {classes} = useFormSelect(props);
</script>
