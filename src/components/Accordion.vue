<template>
    <div
        :id="id"
        class="accordion"
        :class="classes"
    >
        <slot :parent-id="id" />
    </div>
</template>

<script lang="ts" setup>
import useFlush, {flushProps} from '@/composables/useFlush';
import {defineProps} from 'vue';
import {idProps} from '@/composables/useId';
import useClasses from '@/composables/useClasses';

const props = defineProps({
    ...flushProps,
    ...idProps,
});

const {classes} = useClasses([
    useFlush(props.flush, 'accordion-{0}').flushClass.value,
]);
</script>
