<template>
    <li
        class="breadcrumb-item"
        :class="classes"
    >
        <slot />
    </li>
</template>

<script lang="ts" setup>
import useActive, {activeProps} from '../../composables/useActive';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    ...activeProps,
});

const {classes} = useClasses([
    useActive(props.active).activeClass.value,
]);
</script>
