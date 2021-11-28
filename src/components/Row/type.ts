import {Prop} from 'vue';

const aligns = ['center', 'end', 'start'] as const;

type Align = typeof aligns[number];

const justifies = ['around', 'between', 'center', 'end', 'evenly', 'start'] as const;

type Justify = typeof justifies[number];

const gutterProp: Prop<number | string> = {
    type: [Number, String],
    default: undefined,
};

export {
    aligns,
    Align,
    justifies,
    Justify,
    gutterProp,
};
