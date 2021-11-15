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
                    @keydown="keydown($event)"
                    @paste="paste($event)"
                >
            </li>
        </ul>
    </label>
</template>

<script lang="ts">
import {PropType, computed, ref, watch} from 'vue';
import {idProps} from '../../composables/useId';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...idProps,
    modelValue: {
        type: Array as PropType<string[]>,
        default: () => [],
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
});

const emit = defineEmits(['update:modelValue']);

const value = ref('');

const clearValue = () => value.value = '';

const items = computed({
    get: () => props.modelValue,
    set: (v: string[]) => emit('update:modelValue', v),
});

const splitItem = (item: string) => item.split(props.separator);

const removeItem = (index: number) => items.value.splice(index, 1);

const addItem = (item: string) => {
    const newItems = splitItem(item).filter(v => v !== '');

    if (newItems.length === 0) {
        return false;
    }

    items.value = items.value.concat(newItems);

    return true;
};

watch(value, (v) => {
    if (splitItem(v).length > 1 && addItem(v)) {
        clearValue();
    }
});

const keydown = (event: KeyboardEvent) => {
    if (props.submitKeys.includes(event.code)) {
        if (addItem(value.value)) {
            clearValue();
        }

        event.preventDefault();
    } else if (event.code === 'Backspace') {
        if (value.value === '') {
            removeItem(items.value.length - 1);
        }
    }
};

const paste = (event: ClipboardEvent) => {
    event.preventDefault();

    const pasteValue = event.clipboardData.getData('text');

    if (!pasteValue) {
        return;
    }

    items.value = items.value.concat(
        pasteValue.split(props.separator)
            .filter(v => v !== ''),
    );
};
</script>
