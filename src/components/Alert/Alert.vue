<template>
    <div
        class="alert"
        :class="classes"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import {variantProps} from '../../composables/useVariant';
</script>

<script lang="ts" setup>
import useClasses from '../../composables/useClasses';
import useVariant from '../../composables/useVariant';

const props = defineProps(variantProps);

const {classes} = useClasses([
    useVariant(props.variant, 'alert-{0}').variantClass.value,
]);
</script>
