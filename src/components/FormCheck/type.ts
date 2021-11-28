import {PropType} from 'vue';

const types = ['checkbox', 'radio'] as const;

type Type = typeof types[number];

const typeProp = {
    type: String as PropType<Type>,
    default: 'checkbox',
    validator: (t: Type): boolean => types.includes(t),
};

export {typeProp, Type, types};
