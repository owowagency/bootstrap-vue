import {Prop, PropType} from 'vue';

const aligns = ['center', 'end', 'start'] as const;

type Align = typeof aligns[number];

const alignProp: Prop<Align> = {
    type: String as PropType<Align>,
    default: undefined,
    validator: (a: Align) => aligns.includes(a),
};

const gutterProp: Prop<number | string> = {
    type: [Number, String],
    default: undefined,
};

const justifies = ['around', 'between', 'center', 'end', 'evenly', 'start'] as const;

type Justify = typeof justifies[number];

const justifyProp: Prop<Justify> = {
    type: String as PropType<Justify>,
    default: undefined,
    validator: (j: Justify) => justifies.includes(j),
};

export {
    Align,
    alignProp,
    aligns,
    gutterProp,
    Justify,
    justifies,
    justifyProp,
};
