<template>
    <FormDropdown
        ref="formDropdown"
        v-model="modelValue"
        class="form-dropdown-search"
        :items="filteredItems"
        :label-key="labelKey"
        v-bind="propsDropdown"
    >
        <template #dropdownToggle>
            <!-- @slot Displays the dropdown toggle -->
            <slot
                name="dropdownToggle"
                :value="modelValue"
                :search="searchValueDisplayed"
                :placeholder="searchValueCached || placeholder"
                :props-form-control="propsFormControl"
                @update:search="s => searchValueDisplayed = s"
            >
                <FormControl
                    ref="formControl"
                    v-model="searchValueDisplayed"
                    class="form-select"
                    data-bs-toggle="dropdown"
                    :placeholder="searchValueCached || placeholder"
                    v-bind="propsFormControl"
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
            <!-- @slot *Forwarded to child* -->
            <slot
                name="noOptions"
                v-bind="slotScope"
            />
        </template>

        <template #prepend="slotScope">
            <!-- @slot *Forwarded to child* -->
            <slot
                name="prepend"
                v-bind="slotScope"
            />
        </template>

        <template #items="slotScope">
            <!-- @slot *Forwarded to child* -->
            <slot
                name="items"
                v-bind="slotScope"
            />
        </template>

        <template #item="slotScope">
            <!-- @slot *Forwarded to child* -->
            <slot
                name="item"
                v-bind="slotScope"
            />
        </template>

        <template #append="slotScope">
            <!-- @slot *Forwarded to child* -->
            <slot
                name="append"
                v-bind="slotScope"
            />
        </template>
    </FormDropdown>
</template>

<script lang="ts" setup>
import {ComponentPublicInstance, PropType, computed, onMounted, ref, watch} from 'vue';
import FormControl from '@/components/FormControl';
import FormDropdown from '@/components/FormDropdown';
import {Item} from '@/composables/useFormSelect';
import {dropdownProps} from '@/composables/useDropdown';
import extractKeysFrom from '@/library/extractKeysFrom';
import {formControlProps} from '@/composables/useFormControl';
import useBootstrapInstance from '@/composables/useBootstrapInstance';

const props = defineProps({
    ...formControlProps,
    /**
     * Automatically search through the items
     */
    autoSearch: {
        type: Boolean,
        default: true,
    },
    /**
     * The items of the dropdown menu
     */
    items: {
        type: Array as PropType<Item[]>,
        default: () => [],
    },
    /**
     * The key that is used to get the label from a given item
     */
    labelKey: {
        type: String,
        default: 'label',
    },
    /**
     * The model value
     */
    modelValue: {
        type: Object as PropType<Item>,
        default: undefined,
    },
    /**
     * The placeholder of the form input
     */
    placeholder: {
        type: String,
        default: '',
    },
    /**
     * The current search string
     */
    search: {
        type: String,
        default: '',
    },
});

const emit = defineEmits([
    /**
     * Fired when the model value is updated
     * @param {any} value The new value
     */
    'update:modelValue',
    /**
     * Fired when the search value is updated
     * @param {string} search The new search value
     */
    'update:search',
]);

const propsFormControl = extractKeysFrom(
    Object.keys(formControlProps)
        .filter(k => !['modelValue', 'placeholder'].includes(k)),
    props,
);

const propsDropdown = extractKeysFrom(
    Object.keys(dropdownProps)
        .filter(k => !['items', 'labelKey'].includes(k)),
    props,
);

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

const formDropdown = ref<ComponentPublicInstance<typeof FormDropdown>>();

const {bsInstance: bsDropdown} = useBootstrapInstance(
    'Dropdown',
    formControl,
);

const modelValue = computed({
    get: () => props.modelValue,
    set: v => emit('update:modelValue', v),
});

const modelValueLabel = computed(() => modelValue.value?.[props.labelKey]);

const searchValue = ref<string>(modelValueLabel.value || props.search);

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
    get: () => searchValueCached.value !== ''
        ? ''
        : searchValue.value,
    set: s => {
        searchValue.value = s;

        emit('update:search', s);
    },
});

onMounted(() => {
    // Get the dropdown toggle element manually because it is possible to
    // override it with the `dropdownToggle` slot.
    const dropdownToggle = formDropdown.value
        .$el
        .querySelector('[data-bs-toggle="dropdown"]');

    dropdownToggle?.addEventListener('shown.bs.dropdown', () => {
        (dropdownToggle.input as HTMLInputElement)?.focus();

        if (modelValueLabel.value) {
            searchValueCached.value = modelValueLabel.value;
        }

        searchValue.value = '';

        if (props.search !== '') {
            emit('update:search', '');
        }
    });

    dropdownToggle?.addEventListener('hidden.bs.dropdown', () => {
        (dropdownToggle.input as HTMLInputElement)?.blur();

        if (!modelValue.value) {
            searchValue.value = '';
        } else {
            searchValue.value = modelValueLabel.value;
        }

        searchValueCached.value = '';
    });
});


const showMenu = () => {
    if (bsDropdown.value) {
        // TODO: BS calls `toggle` once a user clicks on any
        // `data-bs-toggle="dropdown"`. This event is being fired after the
        // `focus` event, thus will result in hiding the menu after we call
        // `show`. `await nextTick()` also does not solve this problem.
        setTimeout(() => bsDropdown.value.show(), 200);
    }
};

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
    s => searchValue.value = s,
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

<docs>
```vue
<FormDropdownSearch
    :items=""
/>
```

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| modelValue  | The model value                              | string                                            | -      | ''      |
| plainText   | Adds the `form-control-plaintext` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |
</docs>
