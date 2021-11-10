<template>
    <div
        :id="id"
        class="accordion"
        :class="classes"
    >
        <slot :parent-id="id" />
    </div>
</template>

<script lang="ts">
import {flushProps} from '../../composables/useFlush';
import {idProps} from '../../composables/useId';
</script>

<script lang="ts" setup>
import useClasses from '../../composables/useClasses';
import useFlush from '../../composables/useFlush';

const props = defineProps({
    ...flushProps,
    ...idProps,
});

const {classes} = useClasses([
    useFlush(props.flush, 'accordion-{0}').flushClass.value,
]);
</script>
