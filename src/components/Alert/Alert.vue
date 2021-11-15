<template>
    <div
        class="alert"
        :class="classes"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import useClasses from '../../composables/useClasses';
import useVariant from '../../composables/useVariant';
import {variantProps} from '../../composables/useVariant';
</script>

<script lang="ts" setup>
const props = defineProps(variantProps);

const {classes} = useClasses([
    useVariant(props.variant, 'alert-{0}').variantClass.value,
]);
</script>
