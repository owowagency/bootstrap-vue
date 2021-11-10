<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts">
import {colProp} from '../../composables/useCol';

const propsCol = breakpointProps(colProp) as Record<Breakpoint, typeof colProp>;

const propsOffset = breakpointProps(colProp, 'offset-{0}') as Record<`offset${Capitalize<Breakpoint>}`, typeof colProp>;

const propsOrder = breakpointProps(colProp, 'order-{0}') as Record<`order${Capitalize<Breakpoint>}`, typeof colProp>;
</script>

<script lang="ts" setup>
import useBreakpoints, {Breakpoint, breakpointProps} from '../../composables/useBreakpoints';
import {computed} from 'vue';
import useClasses from '../../composables/useClasses';
import useStringTemplate from '../../composables/useStringTemplate';

const props = defineProps({
    cols: colProp,
    ...propsCol,
    offset: colProp,
    ...propsOffset,
    order: colProp,
    ...propsOrder,
});

const colProps = {
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    xxl: props.xxl,
};

const colClass = computed(() => {
    // Add the `.col` class by default when no cols have been specified.
    if (props.cols) {
        return useStringTemplate('col-{0}', props.cols).templatedString.value;
    }

    return 'col';
});

const colClasses = useBreakpoints(colProps, 'col-{0}-{1}').breakpointClasses;

const offsetProps = {
    sm: props.offsetSm,
    md: props.offsetMd,
    lg: props.offsetLg,
    xl: props.offsetXl,
    xxl: props.offsetXxl,
};

const offsetClass = computed(() => useStringTemplate('offset-{0}', props.offset).templatedString.value);

const offsetClasses = useBreakpoints(offsetProps, 'offset-{0}-{1}').breakpointClasses;

const orderProps = {
    sm: props.orderSm,
    md: props.orderMd,
    lg: props.orderLg,
    xl: props.orderXl,
    xxl: props.orderXxl,
};

const orderClass = computed(() => useStringTemplate('order-{0}', props.order).templatedString.value);

const orderClasses = useBreakpoints(orderProps, 'order-{0}-{1}').breakpointClasses;

const {classes} = useClasses([
    colClass.value,
    ...colClasses.value,
    offsetClass.value,
    ...offsetClasses.value,
    orderClass.value,
    ...orderClasses.value,
]);
</script>
