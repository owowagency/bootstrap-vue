<template>
    <label
        class="form-control"
        :for="id"
    >
        <ul class="list-unstyled d-flex align-content-start flex-wrap mb-0">
            <li
                v-for="(item, i) in modelValue"
                :key="i"
                class="form-pill d-inline-flex align-items-center mw-100 px-2 badge bg-primary"
            >
                <div class="text-truncate">
                    {{ item }}
                </div>

                <div
                    class="form-pill-remove"
                    @click="removeItem(i)"
                />
            </li>

            <li class="mw-100">
                <div class="h-0 overflow-hidden">
                    {{ value }}
                </div>

                <input
                    v-model="value"
                    :id="id"
                    class="border-0 w-100 outline-0 p-0"
                    type="text"
                    @keydown="keydown"
                    @paste="paste"
                >
            </li>
        </ul>
    </label>
</template>

<script lang="ts" setup>
import {PropType, computed, ref, watch} from 'vue';
import {idProps} from '../../composables/useId';

const props = defineProps({
    ...idProps,
    modelValue: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    separator: {
        type: [String, RegExp],
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
    const newItems = splitItem(item);

    if (newItems.length === 0) {
        return false;
    }

    items.value = [
        ...items.value,
        ...newItems.filter(v => v !== ''),
    ];

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

    items.value = [
        ...items.value,
        ...pasteValue.split(props.separator)
            .filter(v => v !== ''),
    ];
};
</script>


<style scoped>
/* TODO: Should be put in global styling */

.form-pill {
    /* TODO: Should come from variables */
    margin: 2px 6px 2px 0;
}

.form-pill-remove {
    padding: 4.2px 8px;
    margin: -4.2px -8px -4.2px 0;
    cursor: pointer;
}

.form-pill-remove::after {
    content: 'x';
}

.h-0 {
    height: 0 !important;
}

.outline-0 {
    outline: 0;
}
</style>
