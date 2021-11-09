<template>
    <a
        class="nav-link"
        :class="classes"
        href="#"
    >
        <slot />
    </a>
</template>

<script lang="ts" setup>
import useActive, {activeProps} from '../../composables/useActive';
import useDisabled, {disabledProps} from '../../composables/useDisabled';
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

