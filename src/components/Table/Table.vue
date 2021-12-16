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
                    <th
                        :key="header.key"
                        :class="{
                            sortable: header.sortable,
                            asc: sorted[header.key] === 'asc',
                            desc: sorted[header.key] === 'desc',
                        }"
                        @click="sort(header)"
                    >
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
    sortable?: boolean;
    asc?: boolean;
    desc?: boolean;
}
</script>

<script lang="ts" setup>
import {PropType, computed, reactive} from 'vue';
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

const emits = defineEmits(['click:row', 'sort']);

const sorted = reactive(
    (props.fields || [])
        .filter(f => f.sortable && (f.asc || f.desc))
        .reduce((obj, item) => Object.assign(obj, {[item.key]: item.asc ? 'asc' : 'desc'}), {}),
);

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

const sort = (field: Field) => {
    const key = field.key;

    const sort = sorted[key];

    if (field.sortable) {
        if (sort === 'asc') {
            sorted[key] = 'desc';
        } else if (sort === 'desc') {
            delete sorted[key];
        } else {
            sorted[key] = 'asc';
        }
    }

    emits('sort', sorted);
};

const {classes} = useClasses(computed(() => [
    props.hover && 'table-hover',
    props.click && 'table-click',
]));
</script>
