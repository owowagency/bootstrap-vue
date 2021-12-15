<template>
    <table
        class="table"
        :class="classes"
    >
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
                @click="$emit('click:row', item)"
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
import {useClasses} from '@/composables';

const props = defineProps({
    fields: {
        type: Array as PropType<Field[]>,
        required: false,
        default: undefined,
    },
    items: {
        type: Array as PropType<Record<string, unknown>[]>,
        default: () => [],
    },
    hover: {
        type: Boolean,
        default: false,
    },
    click: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['click:row']);

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

const {classes} = useClasses(computed(() => [
    props.hover && 'table-hover',
    props.click && 'table-click',
]));
</script>
