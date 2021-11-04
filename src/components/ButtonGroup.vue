<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import {computed, defineProps} from 'vue';
import useSize, {sizeProps} from '@/composables/useSize';
import useClasses from '@/composables/useClasses';

const props = defineProps({
    ...sizeProps,
    vertical: {
        type: Boolean,
        default: false,
    },
});

const {classes} = useClasses([
    computed(() => props.vertical ? 'btn-group-vertical' : 'btn-group').value,
    useSize(props.size, 'btn-group-{0}').sizeClass.value,
]);
</script>
