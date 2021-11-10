<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts">
import {sizeProps} from '../../composables/useSize';
</script>

<script lang="ts" setup>
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';
import useSize from '../../composables/useSize';

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
