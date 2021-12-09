<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts">
import {computed, toRef} from 'vue';
import useBreakpoints, {Breakpoint, breakpointProps} from '@/composables/useBreakpoints';
import {colProp} from '@/composables/useCol';
import useClasses from '@/composables/useClasses';
import useStringTemplate from '@/composables/useStringTemplate';

const propsCol = breakpointProps(colProp) as Record<Breakpoint, typeof colProp>;

const propsOffset = breakpointProps(colProp, 'offset-{0}') as Record<`offset${Capitalize<Breakpoint>}`, typeof colProp>;

const propsOrder = breakpointProps(colProp, 'order-{0}') as Record<`order${Capitalize<Breakpoint>}`, typeof colProp>;
</script>

<script lang="ts" setup>
const props = defineProps({
    cols: colProp,
    ...propsCol,
    offset: colProp,
    ...propsOffset,
    order: colProp,
    ...propsOrder,
});

const colProps = {
    sm: toRef(props, 'sm'),
    md: toRef(props, 'md'),
    lg: toRef(props, 'lg'),
    xl: toRef(props, 'xl'),
    xxl: toRef(props, 'xxl'),
};

const colClass = computed(() => {
    // Add the `.col` class by default when no cols have been specified.
    if (props.cols) {
        return useStringTemplate('col-{0}', props.cols).templatedString.value;
    }

    return 'col';
});

const colClasses = computed(() => {
    // When the property is empty string it would result in for example
    // `col-md-`. These classes should be transformed to `col-md`.
    return useBreakpoints(colProps, 'col-{0}-{1}')
        .breakpointClasses
        .value
        .map(c => c.replace(/\-$/, ''));
});

const offsetProps = {
    sm: toRef(props, 'offsetSm'),
    md: toRef(props, 'offsetMd'),
    lg: toRef(props, 'offsetLg'),
    xl: toRef(props, 'offsetXl'),
    xxl: toRef(props, 'offsetXxl'),
};

const offsetClass = computed(() => useStringTemplate('offset-{0}', props.offset).templatedString.value);

const offsetClasses = useBreakpoints(offsetProps, 'offset-{0}-{1}').breakpointClasses;

const orderProps = {
    sm: toRef(props, 'orderSm'),
    md: toRef(props, 'orderMd'),
    lg: toRef(props, 'orderLg'),
    xl: toRef(props, 'orderXl'),
    xxl: toRef(props, 'orderXxl'),
};

const orderClass = computed(() => useStringTemplate('order-{0}', props.order).templatedString.value);

const orderClasses = useBreakpoints(orderProps, 'order-{0}-{1}').breakpointClasses;

const {classes} = useClasses(computed(() => [
    colClass.value,
    ...colClasses.value,
    offsetClass.value,
    ...offsetClasses.value,
    orderClass.value,
    ...orderClasses.value,
]));
</script>
