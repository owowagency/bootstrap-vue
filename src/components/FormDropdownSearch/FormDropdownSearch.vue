<template>
    <FormDropdown
        v-model="modelValue"
        :items="filteredItems"
        :label-key="labelKey"
    >
        <template #dropdownToggle>
            <slot name="dropdownToggle">
                <FormControl
                    ref="formControl"
                    v-model="searchValueDisplayed"
                    data-bs-toggle="dropdown"
                    v-bind="$attrs"
                    @focus="onFocus"
                />
            </slot>
        </template>
    </FormDropdown>
</template>

<script lang="ts" setup>
import {ComponentPublicInstance, PropType, computed, ref, watch} from 'vue';
import FormControl from '@/components/FormControl';
import FormDropdown from '@/components/FormDropdown';
import {Item} from '@/composables/useFormSelect';
import useBootstrapInstance from '@/composables/useBootstrapInstance';

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

const {bsInstance: bsDropdown} = useBootstrapInstance(
    'Dropdown',
    formControl,
);

const modelValue = computed({
    get: () => props.modelValue,
    set: v => emit('update:modelValue', v),
});

/**
 * Is used to display a temporary value in the input while still emitting an
 * empty `search` to the parent. This will for example happen when this
 * component has a `modelValue` and the user focusses on the input. The parent
 * should receive an empty `search` so it can display more options than options
 * that match the `labelKey` of the `modelValue`. It acts af is there is no
 * `search` while still displaying the `modelValue`.
 */
const searchValueCached = ref<string>('');

const searchValueDisplayed = computed({
    get: () => searchValueCached.value !== ''
        ? searchValueCached.value
        : searchValue.value,
    set: s => {
        searchValueCached.value = '';

        searchValue.value = s;

        modelValue.value = undefined;
    },
});

const searchValue = ref<string>(
    modelValue.value
        ? modelValue.value[props.labelKey]
        : props.search,
);

const showMenu = () => {
    if (bsDropdown.value) {
        // TODO: BS calls `toggle` once a user clicks on any
        // `data-bs-toggle="dropdown"`. This event is being fired after the
        // `focus` event, thus will result in hiding the menu after we call
        // `show`. `await nextTick()` also does not solve this problem.
        setTimeout(() => bsDropdown.value.show(), 200);
    }
};

const onFocus = () => {
    (formControl.value.input as HTMLInputElement).select();

    if (searchValueCached.value === '') {
        searchValueCached.value = searchValue.value;
    }

    searchValue.value = '';

    showMenu();
};

watch(modelValue, (newValue, oldValue) => {
    if (newValue) {
        searchValueCached.value = newValue[props.labelKey];
    } else if (
        oldValue
        && searchValueCached.value === ''
        && searchValueDisplayed.value === oldValue[props.labelKey]
    ) {
        searchValue.value = '';
    }
});

watch(() => props.search, s => searchValue.value = s);

watch(searchValue, s => {
    emit('update:search', s);
});

defineExpose({bsDropdown, formControl});
</script>