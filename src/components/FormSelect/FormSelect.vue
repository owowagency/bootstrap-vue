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
<script lang="ts">
import {formSelectProps} from '@/composables/useFormSelect';
</script>

<script lang="ts" setup>
import useFormSelect from '@/composables/useFormSelect';

const props = defineProps(formSelectProps);

const {classes} = useFormSelect(props);
</script>
