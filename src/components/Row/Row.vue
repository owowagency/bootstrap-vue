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
import {Prop, PropType, computed, toRef} from 'vue';
import useBreakpoints, {Breakpoint, breakpointProps} from '../../composables/useBreakpoints';
import {colProp} from '../../composables/useCol';
import {tagProps} from '../../composables/useTag';
import useClasses from '../../composables/useClasses';
import useStringTemplate from '../../composables/useStringTemplate';

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
    ...tagProps,
});

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

const {classes} = useClasses(computed(() => [
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
]));
</script>
