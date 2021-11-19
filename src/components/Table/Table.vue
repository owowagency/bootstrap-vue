<template>
    <table class="table">
        <thead v-if="headers.length">
            <tr>
                <slot
                    v-for="header in headers"
                    :key="`header-${header.key}`"
                    :header="header"
                    :name="`header-${header.key}`"
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
                    :key="header.key"
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

<script lang="ts">
export interface Field {
    key: string;
    label?: string;
}
</script>

<script lang="ts" setup>
import {PropType, computed} from 'vue';

const props = defineProps({
    fields: {
        type: Array as PropType<Field[]>,
        required: false,
        default: undefined,
    },
    items: {
        type: Array as PropType<Record<string, unknown>>,
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
