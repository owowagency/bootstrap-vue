import {PropType} from 'vue';
import {disabledProps} from '@/composables/useDisabled';
import {sizeProps} from '@/composables/useSize';

export const types = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
] as const;

export type Type = typeof types[number];

export const formControlProps = {
    autofocus: {
        type: Boolean,
        default: false,
    },
    ...disabledProps,
    modelValue: {
        type: [String, Number],
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
    required: {
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
