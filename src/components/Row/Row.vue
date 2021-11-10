<template>
    <div
        class="row"
        :class="classes"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import {colProp} from '../../composables/useCol';

export const aligns = ['center', 'end', 'start'] as const;

export type Align = typeof justifies[number];

export const justifies = ['around', 'between', 'center', 'end', 'evenly', 'start'] as const;

export type Justify = typeof aligns[number];

const gutterProp: Prop<number | string> = {
    type: [Number, String],
    default: undefined,
};

const propsCol = breakpointProps(colProp, 'cols-{0}') as Record<`cols${Capitalize<Breakpoint>}`, typeof colProp>;

const propsGutters = breakpointProps(gutterProp, 'gutters-{0}') as Record<`gutters${Capitalize<Breakpoint>}`, typeof gutterProp>;

const propsGuttersX = breakpointProps(gutterProp, 'gutters-x-{0}') as Record<`guttersX${Capitalize<Breakpoint>}`, typeof gutterProp>;

const propsGuttersY = breakpointProps(gutterProp, 'gutters-y-{0}') as Record<`guttersY${Capitalize<Breakpoint>}`, typeof gutterProp>;
</script>

<script lang="ts" setup>
import {Prop, PropType} from 'vue';
import useBreakpoints, {Breakpoint, breakpointProps} from '../../composables/useBreakpoints';
import useClasses from '../../composables/useClasses';
import useStringTemplate from '../../composables/useStringTemplate';

const props = defineProps({
    align: {
        type: String as PropType<Align>,
        default: undefined,
        validator: (a: Align) => aligns.includes(a),
    },
    cols: colProp,
    ...propsCol,
    gutters: gutterProp,
    ...propsGutters,
    guttersX: gutterProp,
    ...propsGuttersX,
    guttersY: gutterProp,
    ...propsGuttersY,
    justify: {
        type: String as PropType<Justify>,
        default: undefined,
        validator: (j: Justify) => justifies.includes(j),
    },
});

const colProps = {
    sm: props.colsSm,
    md: props.colsMd,
    lg: props.colsLg,
    xl: props.colsXl,
    xxl: props.colsXxl,
};

const colClass = useStringTemplate('row-cols-{0}', props.cols).templatedString;

const colClasses = useBreakpoints(colProps, 'row-cols-{0}-{1}').breakpointClasses;

const guttersProps = {
    sm: props.guttersSm,
    md: props.guttersMd,
    lg: props.guttersLg,
    xl: props.guttersXl,
    xxl: props.guttersXxl,
};

const guttersClass = useStringTemplate('g-{0}', props.gutters).templatedString;

const guttersClasses = useBreakpoints(guttersProps, 'g-{0}-{1}').breakpointClasses;

const guttersXProps = {
    sm: props.guttersXSm,
    md: props.guttersXMd,
    lg: props.guttersXLg,
    xl: props.guttersXXl,
    xxl: props.guttersXXxl,
};

const guttersXClass = useStringTemplate('gx-{0}', props.guttersX).templatedString;

const guttersXClasses = useBreakpoints(guttersXProps, 'gx-{0}-{1}').breakpointClasses;

const guttersYProps = {
    sm: props.guttersYSm,
    md: props.guttersYMd,
    lg: props.guttersYLg,
    xl: props.guttersYXl,
    xxl: props.guttersYXxl,
};

const guttersYClass = useStringTemplate('gy-{0}', props.guttersY).templatedString;

const guttersYClasses = useBreakpoints(guttersYProps, 'gy-{0}-{1}').breakpointClasses;

const {classes} = useClasses([
    useStringTemplate('align-items-{0}', props.align).templatedString.value,
    colClass.value,
    ...colClasses.value,
    guttersClass.value,
    ...guttersClasses.value,
    guttersXClass.value,
    ...guttersXClasses.value,
    guttersYClass.value,
    ...guttersYClasses.value,
    useStringTemplate('justify-content-{0}', props.justify).templatedString.value,
]);
</script>
