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
import {computed} from 'vue';
import {flushProps} from '../../composables/useFlush';
import {idProps} from '../../composables/useId';
import useClasses from '../../composables/useClasses';
import useFlush from '../../composables/useFlush';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...flushProps,
    ...idProps,
});

const {classes} = useClasses(computed(() => [
    useFlush(props.flush, 'accordion-{0}').flushClass.value,
]));
</script>
