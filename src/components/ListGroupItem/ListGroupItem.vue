<template>
    <component
        :is="tag"
        class="list-group-item"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import {activeProps} from '../../composables/useActive';
import {disabledProps} from '../../composables/useDisabled';
import {variantProps} from '../../composables/useVariant';

const variantProp = {
    ...variantProps.variant,
    default: '',
};
</script>

<script lang="ts" setup>
import {computed} from 'vue';
import useActive from '../../composables/useActive';
import useDisabled from '../../composables/useDisabled';
import useVariant from '../../composables/useVariant';
import useClasses from '../../composables/useClasses';

const props = defineProps({
    ...activeProps,
    ...disabledProps,
    tag: {
        type: String,
        default: 'li',
    },
    variant: variantProp,
});


const {classes} = useClasses([
    computed(() => ['a', 'button'].includes(props.tag) ? 'list-group-item-action' : undefined).value,
    useActive(props.active).activeClass.value,
    useDisabled(props.disabled).disabledClass.value,
    useVariant(props.variant, 'list-group-item-{0}').variantClass.value
]);
</script>
