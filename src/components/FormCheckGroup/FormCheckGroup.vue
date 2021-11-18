<template>
    <FormCheck
        v-for="(item, index) of items"
        :key="item.value"
        :disabled="disabled"
        :label="item.label || item.value"
        :model-value="getValue(index)"
        :name="name"
        :type="type"
        :switch="isSwitch"
        :value="item.value"
        @update:model-value="setValue($event, index)"
    />
</template>

<script lang="ts">
import FormCheck, {typeProp} from '@/components/FormCheck';
import {PropType, computed} from 'vue';
import {disabledProps} from '@/composables/useDisabled';
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
interface Item {
    label?: string;
    value: any;
};

const props = defineProps({
    ...disabledProps,
    switch: {
        type: Boolean,
        default: false,
    },
    items: {
        type: Array as PropType<Item[]>,
        required: true,
    },
    type: typeProp,
    // Put `modelValue` after `type` so it will be available in `default`.
    modelValue: {
        type: [Array, String, Number, undefined],
        default: (props) => props.type === 'checkbox' ? [] : undefined,
    },
});

const name = props.type === 'checkbox' ? undefined : idProps.id.default();

const emit = defineEmits(['update:modelValue']);

// Required to prevent the use of reserved word `switch` in template.
const isSwitch = computed(() => props.switch);

const value = computed<any[]|string|number|undefined>({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
});

const getValue = (i) => props.type === 'checkbox' ? !!value.value[i] : value.value;

const setValue = (v, i) => {
    if (props.type === 'checkbox') {
        const clone = [...value.value as any[]];

        clone[i] = v;

        value.value = clone;
    } else {
        value.value = v;
    }
};
</script>
