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
    get: () => modelValue.value,
    set: v => emit('update:modelValue', v),
});

const searchValue = ref<string>(
    modelValue.value
        ? modelValue.value[props.labelKey]
        : props.search,
);

const searchValueCached = ref(undefined);

const searchValueDisplayed = computed({
    get: () => searchValueCached.value !== undefined
        ? searchValueCached.value
        : searchValue.value,
    set: s => searchValue.value = s,
});

const onFocus = () => {
    (formControl.value.input as HTMLInputElement).select();

    if (searchValueCached.value === undefined) {
        searchValueCached.value = searchValue.value;
    }

    searchValue.value = '';
};

// Update the `search` once the label of the value changes. This happens
// for example when a user clicks on an item. The input should show the label
// of the clicked item..
watch(
    () => props.modelValue,
    v => {
        v && (searchValueCached.value = undefined);

        searchValue.value = v?.[props.labelKey] || '';
    },
);

watch(
    () => props.search,
    s => searchValue.value = s,
);

watch(
    () => searchValue.value,
    s => {
        if (modelValue.value !== undefined) {
            // Prevent emitting new `update:search` events when the
            // `searchValue` is equal to the label of the `modelValue`.
            if (modelValue.value[props.labelKey] === searchValueDisplayed.value) {
                return;
            }
            
            modelValue.value = undefined;
        }

        if (s !== '' && searchValueCached.value !== undefined) {
            searchValueCached.value === undefined;
        }

        if (searchValueCached.value === undefined) {
            emit('update:search', s);
        }
    },
);






















// const bootstrap = ref<{Dropdown: typeof Dropdown}>();

// const bsDropdown = ref<Dropdown>();

// const dropdownToggle = ref<ComponentPublicInstance<typeof FormControl>>();

// onMounted(async() => {
//     if (document) {
//         bootstrap.value = await import('bootstrap');

//         bsDropdown.value = bootstrap.value
//             .Dropdown
//             .getOrCreateInstance(dropdownToggle.value.$el);
//     }
// });

// const hide = () => bsDropdown.value?.hide();

// // TODO: Somehow it hides directly after.
// const show = () => {
//     bsDropdown.value?.show();

//     return false;
// };

// defineExpose({dropdownToggle});
</script>
