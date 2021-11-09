<template>
    <select
        class="form-select"
        :class="classes"
        :disabled="disabled"
    >
        <option
            v-for="item in items"
            :key="item.value"
            :selected="item.selected"
            :value="item.value"
        >
            {{ item.label || item.value }}
        </option>
    </select>
</template>

<script lang="ts" setup>
import useDisabled, {disabledProps} from '../../composables/useDisabled';
import useSize, {sizeProps} from '../../composables/useSize';
import {PropType} from 'vue';
import useClasses from '../../composables/useClasses';

interface Item {
    label?: string;
    selected?: boolean;
    value: string | number | undefined;
}

const props = defineProps({
    ...disabledProps,
    items: {
        type: Array as PropType<Item[]>,
        default: () => [],
    },
    ...sizeProps,
});

const {classes} = useClasses([
    useDisabled(props.disabled).disabledClass.value,
    useSize(props.size, 'form-select-{0}').sizeClass.value,
]);
</script>
