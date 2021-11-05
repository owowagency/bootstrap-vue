<template>
    <div
        class="alert"
        :class="classes"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import useVariant, {variantProps} from '../../composables/useVariant';
import useClasses from '../../composables/useClasses';

const props = defineProps(variantProps);

const {classes} = useClasses([
    useVariant(props.variant, 'alert-{0}').variantClass.value,
]);
</script>
