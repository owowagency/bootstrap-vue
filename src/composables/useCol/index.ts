import {Prop} from 'vue';

export const colProp: Prop<number | string> = {
    type: [Number, String],
    default: undefined,
    validator: (c: number) => c > 0 && c <= 12,
};
