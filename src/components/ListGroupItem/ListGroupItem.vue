<template>
    <component
        :is="tag"
        class="list-group-item"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
import useActive, {activeProps} from '../../composables/useActive';
import useDisabled, {disabledProps} from '../../composables/useDisabled';
import useVariant, {variantProps} from '../../composables/useVariant';
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    ...activeProps,
    ...disabledProps,
    tag: {
        type: String,
        default: 'li',
    },
    variant: {
        ...variantProps.variant,
        default: '',
    },
});


const {classes} = useClasses([
    computed(() => ['a', 'button'].includes(props.tag) ? 'list-group-item-action' : undefined).value,
    useActive(props.active).activeClass.value,
    useDisabled(props.disabled).disabledClass.value,
    useVariant(props.variant, 'list-group-item-{0}').variantClass.value
]);
</script>
