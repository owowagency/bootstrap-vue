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
                    class="form-select"
                    data-bs-toggle="dropdown"
                    :placeholder="searchValueCached || placeholder"
                    v-bind="$attrs"
                    @focus="showMenu"
                />
            </slot>
        </template>

        <!-- Rollup does not dynamically overriding child slots. See issue #35
        <template
            v-for="slotName in formDropdownSlots"
            #[slotName]="slotScope"
        >
            <slot
                :name="slotName"
                v-bind="slotScope"
            />
        </template> -->

        <template #noOptions="slotScope">
            <slot
                name="noOptions"
                v-bind="slotScope"
            />
        </template>

        <template #prepend="slotScope">
            <slot
                name="prepend"
                v-bind="slotScope"
            />
        </template>

        <template #items="slotScope">
            <slot
                name="items"
                v-bind="slotScope"
            />
        </template>

        <template #item="slotScope">
            <slot
                name="item"
                v-bind="slotScope"
            />
        </template>

        <template #append="slotScope">
            <slot
                name="append"
                v-bind="slotScope"
            />
        </template>
    </FormDropdown>
</template>

<script lang="ts" setup>
import {ComponentPublicInstance, PropType, computed, ref, watch, onMounted, unref} from 'vue';
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
    placeholder: {
        type: String,
        default: '',
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

const modelValueLabel = computed(() => modelValue.value?.[props.labelKey]);

/**
 * Is used to display a temporary value in the input while still emitting an
 * empty `search` to the parent. This will for example happen when this
 * component has a `modelValue` and the user focuses on the input. The parent
 * should receive an empty `search` so it can display more options than options
 * that match the `labelKey` of the `modelValue`. It acts af is there is no
 * `search` while still displaying the `modelValue`.
 */
const searchValueCached = ref<string>('');

const searchValueDisplayed = computed({
    get: () => {
        return searchValueCached.value !== ''
            ? ''
            : searchValue.value;
    },
    set: s => {
        searchValue.value = s;

        emit('update:search', s);
    },
});

const searchValue = ref<string>(
    modelValueLabel.value || props.search,
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

onMounted(() => {
    formControl.value.$el.addEventListener('shown.bs.dropdown', () => {
        (formControl.value.input as HTMLInputElement).focus();

        if (modelValue.value) {
            searchValueCached.value = modelValueLabel.value;
        }

        emit('update:search', searchValue.value = '');
    });

    formControl.value.$el.addEventListener('hidden.bs.dropdown', () => {
        (formControl.value.input as HTMLInputElement).blur();

        if (!modelValue.value) {
            searchValue.value = '';
        } else {
            searchValue.value = modelValueLabel.value;
        }

        searchValueCached.value = '';
    });
});

watch(
    modelValue,
    newValue => {
        if (newValue) {
            searchValue.value = newValue[props.labelKey];
        } else {
            searchValue.value = '';
        }
    },
);

watch(
    () => props.search,
    s => {
        searchValue.value = s
    }
);

// Rollup does not like dynamically overriding slots so this is not used for now.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formDropdownSlots = [
    'noOptions',
    'prepend',
    'items',
    'item',
    'append',
];

defineExpose({bsDropdown, formControl});
</script>
