<template>
    <a
        class="nav-link"
        :class="classes"
        href="#"
    >
        <slot />
    </a>
</template>

<script lang="ts">
import useActive, {activeProps} from '../../composables/useActive';
import useDisabled, {disabledProps} from '../../composables/useDisabled';
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...activeProps,
    ...disabledProps,
});

const {classes} = useClasses(computed(() => [
    useActive(props.active).activeClass.value,
    useDisabled(props.disabled).disabledClass.value,
]));
</script>

