<template>
    <label
        class="form-control"
        :for="id"
    >
        <ul class="list-unstyled d-flex align-content-start flex-wrap mb-0">
            <li
                v-for="(item, i) in modelValue"
                :key="i"
                class="form-pill d-inline-flex align-items-center mw-100"
            >
                <div class="form-pill-text">
                    {{ item }}
                </div>

                <div
                    class="form-pill-remove"
                    @click="removeItem(i)"
                />
            </li>

            <li class="form-pill-input-item">
                <div class="form-pill-input-sizer overflow-hidden">
                    {{ value }}
                </div>

                <input
                    :id="id"
                    v-model="value"
                    class="form-pill-input w-100"
                    type="text"
                    :placeholder="items.length ? '' : placeholder"
                    @blur="blur($event)"
                    @keydown="keydown($event)"
                    @paste="paste($event)"
                >
            </li>
        </ul>
    </label>
</template>

<script lang="ts">
import {PropType, computed, ref, watch} from 'vue';
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
const props = defineProps({
    editItemOnBackspace: {
        type: Boolean,
        default: false,
    },
    ...idProps,
    maxItems: {
        type: Number,
        default: Infinity,
    },
    modelValue: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    placeholder: {
        type: String,
        default: '',
    },
    separator: {
        type: [String, RegExp],
        // For some reason it does not allow RegExp to be used as default value.
        // eslint-disable-next-line vue/require-valid-default-prop
        default: /[\s\n]+/,
    },
    submitKeys: {
        type: Array as PropType<string[]>,
        default: () => ['Enter'],
    },
    valueMatcher: {
        type: [String, RegExp],
        // For some reason it does not allow RegExp to be used as default value.
        // eslint-disable-next-line vue/require-valid-default-prop
        default: /^.+$/,
    },
});

const emit = defineEmits(['update:modelValue']);

const value = ref('');

const clearValue = () => value.value = '';

const items = computed({
    get: () => props.modelValue,
    set: (v: string[]) => emit('update:modelValue', v),
});

const maxItemsReached = computed(() => items.value.length >= props.maxItems);

const matchItem = (item: string) => !!item.match(props.valueMatcher);

const splitItem = (item: string) => item.split(props.separator);

const removeItem = (index: number) => items.value.splice(index, 1);

const validateValue = (value: string|string[]) => {
    if (Array.isArray(value)) {
        return value.every(validateValue);
    }

    return matchItem(value);
};

const addItem = (item: string) => {
    if (maxItemsReached.value) {
        return false;
    }

    const newItems = splitItem(item).filter(matchItem);

    if (newItems.length === 0) {
        return false;
    }

    const allowedItems = newItems.slice(0, props.maxItems - items.value.length);

    items.value = items.value.concat(allowedItems);

    return true;
};

watch(value, (v) => {
    const splitItems = splitItem(v);

    if (
        splitItems.length > 1
        && splitItems.filter(validateValue).length === splitItems.filter(v => v !== '').length
    ) {
        addItem(v);

        clearValue();
    }
});

// We need to pass the Focus Event to the blur method in order for the test to
// be able to mock the blur method.
const blur = (event: FocusEvent) => {
    const splitItems = splitItem(value.value);

    if (validateValue(splitItems)) {
        addItem(value.value);

        clearValue();
    }
};

const keydown = (event: KeyboardEvent) => {
    if (event.code === 'Backspace') {
        if (value.value !== '') {
            return;
        }

        const [removedItem] = removeItem(items.value.length - 1);

        if (props.editItemOnBackspace && removedItem) {
            value.value = removedItem;

            event.preventDefault();
        }

        return;
    }

    // If the max allowed items has been reached, don't allow any more typing.
    if (maxItemsReached.value) {
        event.preventDefault();

        return;
    }

    if (props.submitKeys.includes(event.code)) {
        const splitItems = splitItem(value.value);

        if (validateValue(splitItems)) {
            addItem(value.value);

            clearValue();
        }

        event.preventDefault();
    }
};

const paste = (event: ClipboardEvent) => {
    event.preventDefault();

    const pasteValue = event.clipboardData.getData('text');

    if (!pasteValue) {
        return;
    }

    const newValue = value.value + pasteValue;

    const splitItems = splitItem(newValue);

    // If the input value together with the paste value are valid, add the items,
    // otherwise concat the paste value to the input value.
    if (validateValue(splitItems)) {
        addItem(newValue);

        clearValue();
    } else {
        value.value = newValue;
    }
};
</script>
