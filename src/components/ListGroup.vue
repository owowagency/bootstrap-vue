<template>
    <component
        :is="tag"
        class="list-group"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
import {computed, defineProps} from 'vue';
import useFlush, {flushProps} from '@/composables/useFlush';
import useClasses from '@/composables/useClasses';

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

const {classes} = useClasses([
    useFlush(props.flush, 'list-group-{0}').flushClass.value,
    computed(() => props.horizontal ? 'list-group-horizontal' : undefined).value,
    computed(() => props.numbered ? 'list-group-numbered' : undefined).value,
]);
</script>
