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
import {activeProps} from '../../composables/useActive';
import {disabledProps} from '../../composables/useDisabled';
</script>

<script lang="ts" setup>
import useActive from '../../composables/useActive';
import useDisabled from '../../composables/useDisabled';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    ...activeProps,
    ...disabledProps,
});

const {classes} = useClasses([
    useActive(props.active).activeClass.value,
    useDisabled(props.disabled).disabledClass.value,
]);
</script>

