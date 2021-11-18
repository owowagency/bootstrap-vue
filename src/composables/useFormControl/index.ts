import {PropType} from 'vue';
import {disabledProps} from '@/composables/useDisabled';
import {sizeProps} from '@/composables/useSize';

export const types = ['date', 'email', 'number', 'password', 'text'] as const;

export type Type = typeof types[number];

export const formControlProps = {
    ...disabledProps,
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    plainText: {
        type: Boolean,
        default: false,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    ...sizeProps,
    type: {
        type: String as PropType<Type>,
        default: 'text',
        validator: (v: Type) => types.includes(v),
    },
};
