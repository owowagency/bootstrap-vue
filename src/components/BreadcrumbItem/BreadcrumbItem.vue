<template>
    <li
        class="breadcrumb-item"
        :class="classes"
    >
        <slot />
    </li>
</template>

<script lang="ts">
import {activeProps} from '@/composables/useActive';
import {computed} from 'vue';
import useActive from '@/composables/useActive';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...activeProps,
});

const {classes} = useClasses(computed(() => [
    useActive(props.active).activeClass.value,
]));
</script>
