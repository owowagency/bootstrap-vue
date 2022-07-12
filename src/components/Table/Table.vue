<template>
    <table
        class="table"
        :class="classes"
    >
        <thead v-if="headers.length">
            <tr>
                <!--
                @slot Displays the header of the table
                @binding {string} key The key of the header
                @binding {object} header The header object
                @binding {string} name The header name
                -->
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
            <!-- @slot Displays as the top row of the table -->
            <slot name="top-row" />

            <!-- @slot Displays if there are no items in the table -->
            <slot
                v-if="!items.length"
                name="no-items"
            />

            <template
                v-for="(item, index) in items"
                v-else
                :key="`item-${index}`"
            >
                <!--
                @slot Displays the row of the table
                @binding {object} item The item object
                @binding {int} index The index of the item
                -->
                <slot
                    name="row"
                    :item="item"
                    :index="index"
                >
                    <tr @click="$emit('click:row', item)">
                        <!--
                        @slot Displays the content of the table row
                        @binding {any} key The key of the header
                        @binding {any} name The name of the header
                        @binding {object} item The item of the row
                        @binding {int} index The index of the item of the row
                        -->
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

            <!-- @slot Displays as the bottom row of the table -->
            <slot name="bottom-row" />
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
import {PropType, computed, ref} from 'vue';
import {useClasses} from '@/composables';

const props = defineProps({
    /**
     * The fields of the table
     */
    fields: {
        type: Array as PropType<Field[]>,
        required: false,
        default: undefined,
    },
    /**
     * The items that are shown in the table
     */
    items: {
        type: Array as PropType<Record<string, unknown>[]>,
        default: () => [],
    },
    /**
     * Defines if multiple items can be sorted at once
     */
    multiSort: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the `table-hover` class should be used
     */
    hover: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the `table-click` class should be used
     */
    // $attrs doesn't return emitted events, so
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

const sorted = ref(
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

    const sort = sorted.value[key];

    if (props.multiSort) {
        if (sort === 'asc') {
            sorted.value[key] = 'desc';
        } else if (sort === 'desc') {
            delete sorted.value[key];
        } else {
            sorted.value[key] = 'asc';
        }
    } else {
        sorted.value = {
            [key]: sort === 'asc' ? 'desc' : 'asc',
        };
    }

    emit('sort', sorted.value);
};

const {classes} = useClasses(computed(() => [
    props.hover && 'table-hover',
    props['onClick:row'] && 'table-click',
]));
</script>

<docs>
```vue
<Table
    :fields="[Field]"
    :items="[Object]"
    multiSort
    hover
/>
```
</docs>
