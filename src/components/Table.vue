<template>
    <table class="table">
        <thead v-if="headers.length">
            <tr>
                <slot
                    v-for="header in headers"
                    :header="header"
                    :name="`header-${header}`"
                >
                    <th :key="header.key">
                        {{ header.label || header.key }}
                    </th>
                </slot>
            </tr>
        </thead>

        <tbody>
            <tr
                v-for="(item, index) in items"
                :key="`item-${index}`"
            >
                <slot
                    v-for="header in headers"
                    :name="header.key"
                    :item="item"
                >
                    <td :key="`item-${index}-${header}`">
                        {{ item[header.key] }}
                    </td>
                </slot>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import {PropType, computed, defineProps} from 'vue';

export interface Field {
    key: string;
    label?: string;
};

const props = defineProps({
    fields: {
        type: Array as PropType<Field[]>,
        required: false,
        default: undefined,
    },
    items: {
        type: Array as PropType<Record<string, any>>,
        default: () => [],
    },
});

const headers = computed<Field[]>(() => {
    if (props.fields) {
        return props.fields;
    }

    const first = props.items.find(i => i !== undefined);

    return first
        ? Object.keys(first)
            .map(f => ({key: f}))
        : [];
});
</script>
