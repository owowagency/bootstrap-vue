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
                            'table-heading-sortable': header.sortable,
                            'table-heading-sortable-asc': sorted[header.key] === 'asc',
                            'table-heading-sortable-desc': sorted[header.key] === 'desc',
                        }"
                        @click="sort(header)"
                    >
                        {{ header.label || header.key }}
                    </th>
                </slot>
            </tr>
        </thead>

        <tbody>
            <slot
                v-if="!items.length"
                name="no-items"
            />

            <template
                v-for="(item, index) in items"
                v-else
                :key="`item-${index}`"
            >
                <slot
                    name="row"
                    :item="item"
                    :index="index"
                >
                    <tr @click="$emit('click:row', item)">
                        <slot
                            v-for="header in headers"
                            :key="header.key"
                            :name="header.key"
                            :item="item"
                            :index="index"
                        >
                            <td :key="`item-${index}-${header}`">
                                {{ item[header.key] }}
                            </td>
                        </slot>
                    </tr>
                </slot>
            </template>
        </tbody>
    </table>
</template>

<script lang="ts">
export interface Field {
    key: string;
    label?: string;
    sortable?: boolean;
    sort?: 'asc' | 'desc';
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
    // $attrs doesn't return emitted events so
    // we have to catch it as a prop
    // eslint-disable-next-line vue/prop-name-casing
    'onClick:row': {
        type: Function,
        default: undefined,
    },
});

const emit = defineEmits<{
    (event: 'click:row', item: Record<string, unknown>): void
    (event: 'sort', sorted: Record<string, string>): void
}>();

const sorted = reactive(
    (props.fields || [])
        .filter(f => f.sortable && f.sort)
        .reduce((obj, item) => Object.assign(obj, {[item.key]: item.sort}), {}),
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
    if (!field.sortable) {
        return;
    }

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

    emit('sort', sorted);
};

const {classes} = useClasses(computed(() => [
    props.hover && 'table-hover',
    props['onClick:row'] && 'table-click',
]));
</script>
