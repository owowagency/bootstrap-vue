<template>
    <component
        :is="tag"
        class="row"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import {alignProp, gutterProp, justifyProp} from '@/components/Row/type';
import {computed, toRef} from 'vue';
import useBreakpoints, {Breakpoint, breakpointProps} from '@/composables/useBreakpoints';
import {colProp} from '@/composables/useCol';
import {tagProps} from '@/composables/useTag';
import useClasses from '@/composables/useClasses';
import useStringTemplate from '@/composables/useStringTemplate';

const propsAlign = breakpointProps(alignProp, 'align-{0}') as Record<`align${Capitalize<Breakpoint>}`, typeof alignProp>;

const propsCol = breakpointProps(colProp, 'cols-{0}') as Record<`cols${Capitalize<Breakpoint>}`, typeof colProp>;

const propsGutters = breakpointProps(gutterProp, 'gutters-{0}') as Record<`gutters${Capitalize<Breakpoint>}`, typeof gutterProp>;

const propsGuttersX = breakpointProps(gutterProp, 'gutters-x-{0}') as Record<`guttersX${Capitalize<Breakpoint>}`, typeof gutterProp>;

const propsGuttersY = breakpointProps(gutterProp, 'gutters-y-{0}') as Record<`guttersY${Capitalize<Breakpoint>}`, typeof gutterProp>;

const propsJustify = breakpointProps(justifyProp, 'justify-{0}') as Record<`justify${Capitalize<Breakpoint>}`, typeof justifyProp>;
</script>

<script lang="ts" setup>
const props = defineProps({
    align: alignProp,
    ...propsAlign,
    cols: colProp,
    ...propsCol,
    gutters: gutterProp,
    ...propsGutters,
    guttersX: gutterProp,
    ...propsGuttersX,
    guttersY: gutterProp,
    ...propsGuttersY,
    justify: justifyProp,
    ...propsJustify,
    ...tagProps,
});

const alignProps = {
    sm: toRef(props, 'alignSm'),
    md: toRef(props, 'alignMd'),
    lg: toRef(props, 'alignLg'),
    xl: toRef(props, 'alignXl'),
    xxl: toRef(props, 'alignXxl'),
};

const alignClass = useStringTemplate('align-items-{0}', props.align).templatedString;

const alignClasses = useBreakpoints(alignProps, 'align-items-{0}-{1}').breakpointClasses;

const colProps = {
    sm: toRef(props, 'colsSm'),
    md: toRef(props, 'colsMd'),
    lg: toRef(props, 'colsLg'),
    xl: toRef(props, 'colsXl'),
    xxl: toRef(props, 'colsXxl'),
};

const colClass = useStringTemplate('row-cols-{0}', props.cols).templatedString;

const colClasses = useBreakpoints(colProps, 'row-cols-{0}-{1}').breakpointClasses;

const guttersProps = {
    sm: toRef(props, 'guttersSm'),
    md: toRef(props, 'guttersMd'),
    lg: toRef(props, 'guttersLg'),
    xl: toRef(props, 'guttersXl'),
    xxl: toRef(props, 'guttersXxl'),
};

const guttersClass = useStringTemplate('g-{0}', props.gutters).templatedString;

const guttersClasses = useBreakpoints(guttersProps, 'g-{0}-{1}').breakpointClasses;

const guttersXProps = {
    sm: toRef(props, 'guttersXSm'),
    md: toRef(props, 'guttersXMd'),
    lg: toRef(props, 'guttersXLg'),
    xl: toRef(props, 'guttersXXl'),
    xxl: toRef(props, 'guttersXXxl'),
};

const guttersXClass = useStringTemplate('gx-{0}', props.guttersX).templatedString;

const guttersXClasses = useBreakpoints(guttersXProps, 'gx-{0}-{1}').breakpointClasses;

const guttersYProps = {
    sm: toRef(props, 'guttersYSm'),
    md: toRef(props, 'guttersYMd'),
    lg: toRef(props, 'guttersYLg'),
    xl: toRef(props, 'guttersYXl'),
    xxl: toRef(props, 'guttersYXxl'),
};

const guttersYClass = useStringTemplate('gy-{0}', props.guttersY).templatedString;

const guttersYClasses = useBreakpoints(guttersYProps, 'gy-{0}-{1}').breakpointClasses;

const justifyProps = {
    sm: toRef(props, 'justifySm'),
    md: toRef(props, 'justifyMd'),
    lg: toRef(props, 'justifyLg'),
    xl: toRef(props, 'justifyXl'),
    xxl: toRef(props, 'justifyXxl'),
};

const justifyClass = useStringTemplate('justify-content-{0}', props.justify).templatedString;

const justifyClasses = useBreakpoints(justifyProps, 'justify-content-{0}-{1}').breakpointClasses;

const {classes} = useClasses(computed(() => [
    alignClass.value,
    ...alignClasses.value,
    colClass.value,
    ...colClasses.value,
    guttersClass.value,
    ...guttersClasses.value,
    guttersXClass.value,
    ...guttersXClasses.value,
    guttersYClass.value,
    ...guttersYClasses.value,
    justifyClass.value,
    ...justifyClasses.value,
]));
</script>
