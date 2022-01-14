<template>
    <FormDropdown
        v-model="modelValue"
        :items="filteredItems"
    >
        <template #dropdownToggle>
            <FormControl
                v-model="searchValueDisplayed"
                data-bs-toggle="dropdown"
                ref="formControl"
                @focus="onFocus"
            />
        </template>
    </FormDropdown>
</template>

<script lang="ts" setup>
import {ComponentPublicInstance, PropType, computed, ref, onMounted, watch} from 'vue';
import FormControl from '@/components/FormControl';
import FormDropdown from '@/components/FormDropdown';
import {Item} from '@/composables/useFormSelect';
import {type Dropdown} from 'bootstrap';

const props = defineProps({
    autoSearch: {
        type: Boolean,
        default: true,
    },
    items: {
        type: Array as PropType<Item[]>,
        default: () => [],
    },
    labelKey: {
        type: String,
        default: 'label',
    },
    modelValue: {
        type: Object as PropType<Item>,
        default: undefined,
    },
    search: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue', 'update:search']);

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

const formControl = ref<ComponentPublicInstance<typeof FormControl>>();

const modelValue = computed({
    get: () => props.modelValue,
    set: v => emit('update:modelValue', v),
});

const searchValueCached = ref<string>('');

const searchValueDisplayed = computed({
    get: () => searchValueCached.value !== ''
        ? searchValueCached.value
        : searchValue.value,
    set: s => {
        searchValueCached.value = '';

        searchValue.value = s;
    },
});

const searchValue = ref<string>(
    modelValue.value
        ? modelValue.value[props.labelKey]
        : props.search,
);

const onFocus = () => {
    (formControl.value.input as HTMLInputElement).select();

    if (searchValueCached.value === '') {
        searchValueCached.value = searchValue.value;
    }

    searchValue.value = '';
};

watch(modelValue, v => v && (searchValueCached.value = v[props.labelKey]));

watch(() => props.search, s => searchValue.value = s);

watch(searchValue, s => emit('update:search', s));
</script>
