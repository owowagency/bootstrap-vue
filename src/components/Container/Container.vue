<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    fluid: {
        type: Boolean,
        default: false,
    },
});

const {classes} = useClasses(computed(() => [
    `container${props.fluid ? '-fluid' : ''}`,
]));
</script>
