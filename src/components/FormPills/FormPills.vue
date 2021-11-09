<template>
    <ul class="form-control list-unstyled d-flex align-content-start flex-wrap">
        <li
            v-for="item in items"
            :key="item"
            class="form-pill d-inline-flex align-items-center mw-100 px-2 badge bg-primary"
        >
            <div class="text-truncate">
                {{ item }}
            </div>

            <div>
                x
            </div>
        </li>

        <li class="bg-info mw-100">
            <div class="h-0 overflow-hidden">
                {{ value }}
            </div>

            <input
                v-model="value"
                class="border-0 w-100 outline-0 p-0"
                type="text"
                @keydown="keydown"
                @paste="paste"
            >
        </li>
    </ul>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const value = ref('');

const clearValue = () => value.value = '';

const items = ref([
    'Some pill',
    'Another pill',
    'A very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long pill',
]);

const addItem = (item: string) => items.value.push(item);

const addValue = () => {
    const newValue = value.value.replace(/[\s|\n]+/, '');

    if (newValue === '') {
        return;
    }

    addItem(newValue);

    clearValue();
};

const keydown = (event: KeyboardEvent) => {
    switch (event.code) {
        case 'Enter':
        case 'Space':
        case 'Tab':
            addValue();
            break;

        case 'Backspace':
            if (value.value === '') {
                items.value.pop();
            }
            break;
    }
};

const paste = (event: ClipboardEvent) => {
    const pasteValue = event.clipboardData.getData('text');

    if (!pasteValue) {
        return;
    }

    event.preventDefault();

    items.value = [
        ...items.value,
        ...pasteValue.split(/[\s\n]+/)
            .filter(v => v !== ''),
    ];
};
</script>


<style scoped>
.form-pill {
    /* TODO: Should come from variables */
    margin: 2px 6px 2px 0;
}
.h-0 {
    height: 0 !important;
}

.outline-0 {
    outline: 0;
}
</style>
