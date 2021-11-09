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
import {PropType, computed, ref} from 'vue';
import {idProps} from '../../composables/useId';

const props = defineProps({
    ...idProps,
    modelValue: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    separatorKeys: {
        type: Array as PropType<string[]>,
        default: () => ['Enter', 'Space', 'Tab'],
    },
});

const emit = defineEmits(['update:modelValue']);

const value = ref('');

const clearValue = () => value.value = '';

const items = computed({
    get: () => props.modelValue,
    set: (v: string[]) => emit('update:modelValue', v),
});

const addItem = (item: string) => items.value.push(item);

const removeItem = (index: number) => items.value.splice(index, 1);

const addValue = () => {
    const newValue = value.value.replace(/[\s|\n]+/, '');

    if (newValue === '') {
        return;
    }

    addItem(newValue);

    clearValue();
};

const keydown = (event: KeyboardEvent) => {
    if (props.separatorKeys.includes(event.code)) {
        addValue();

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
        ...pasteValue.split(/[\s\n]+/)
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
