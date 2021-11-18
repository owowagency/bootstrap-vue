<template>
    <component
        :is="tag"
        class="list-group"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import useFlush, {flushProps} from '@/composables/useFlush';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...flushProps,
    horizontal: {
        type: Boolean,
        default: false,
    },
    numbered: {
        type: Boolean,
        default: false,
    },
});

const tag = computed(() => props.numbered ? 'ol' : 'ul');

const {classes} = useClasses(computed(() => [
    useFlush(props.flush, 'list-group-{0}').flushClass.value,
    props.horizontal ? 'list-group-horizontal' : undefined,
    props.numbered ? 'list-group-numbered' : undefined,
]));
</script>
