<template>
    <li
        class="breadcrumb-item"
        :class="classes"
    >
        <slot />
    </li>
</template>

<script lang="ts">
import {activeProps} from '../../composables/useActive';
</script>

<script lang="ts" setup>
import useActive from '../../composables/useActive';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    ...activeProps,
});

const {classes} = useClasses([
    useActive(props.active).activeClass.value,
]);
</script>
