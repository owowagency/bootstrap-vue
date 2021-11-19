<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts">
import useSize, {sizeProps} from '@/composables/useSize';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...sizeProps,
    vertical: {
        type: Boolean,
        default: false,
    },
});

const {classes} = useClasses(computed(() => [
    computed(() => props.vertical ? 'btn-group-vertical' : 'btn-group').value,
    useSize(props.size, 'btn-group-{0}').sizeClass.value,
]));
</script>
