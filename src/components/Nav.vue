<template>
    <nav
        class="nav"
        :class="classes"
    >
        <slot />
    </nav>
</template>

<script lang="ts" setup>
import {computed, defineProps} from 'vue';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    fill: {
        type: Boolean,
        default: false,
    },
    justified: {
        type: Boolean,
        default: false,
    },
    pills: {
        type: Boolean,
        default: false,
    },
    tabs: {
        type: Boolean,
        default: false,
    },
    vertical: {
        type: Boolean,
        default: false,
    },
});

const {classes} = useClasses([
    computed(() => props.fill ? 'nav-fill' : undefined).value,
    computed(() => props.justified ? 'nav-justified' : undefined).value,
    computed(() => props.pills ? 'nav-pills' : undefined).value,
    computed(() => props.tabs ? 'nav-tabs' : undefined).value,
    computed(() => props.vertical ? 'flex-column' : undefined).value,
]);
</script>
