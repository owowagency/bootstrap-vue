<template>
    <FormCheck
        v-for="(item, index) of items"
        :key="item.value"
        v-model="value[index]"
        :label="item.label || item.value"
        :value="item.value"
    />
</template>

<script lang="ts" setup>
import {PropType, ref} from 'vue';
import FormCheck from '../FormCheck';

interface Item {
    label: string;
    value: any;
};

defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
    items: {
        type: Array as PropType<Item[]>,
        required: true,
    },
});

const value = ref([]);

const emit = defineEmits(['update:modelValue']);
</script>
