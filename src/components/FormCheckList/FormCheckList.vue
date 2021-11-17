<template>
    <FormCheck
        v-for="(item, index) of items"
        :key="item.value"
        :label="item.label || item.value"
        :model-value="getValue(index)"
        :name="name"
        :value="item.value"
        :type="type"
        @update:model-value="setValue($event, index)"
    />
</template>

<script lang="ts">
import FormCheck, {typeProp} from '../FormCheck';
import {PropType, computed} from 'vue';
import {idProps} from '../../composables/useId';
</script>

<script lang="ts" setup>
interface Item {
    label: string;
    value: any;
};

const props = defineProps({
    modelValue: {
        type: [Array, String, Number, undefined],
        default: (props) => props.type === 'checkbox' ? [] : undefined,
    },
    items: {
        type: Array as PropType<Item[]>,
        required: true,
    },
    type: typeProp,
});

const name = props.type === 'checkbox' ? undefined : idProps.id.default();

const value = computed<any[]|string|number|undefined>({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
});

const emit = defineEmits(['update:modelValue']);

const getValue = (i) => props.type === 'checkbox' ? !!value.value[i] : value.value;

const setValue = (v, i) => {
    if (props.type === 'checkbox') {
        value.value[i] = v;
    } else {
        value.value = v;
    }
};
</script>
