import {PropType} from 'vue';

export const triggers = ['click', 'hover', 'focus', 'manual'] as const;

export type Trigger = typeof triggers[number];

export const triggerProps = {
    trigger: {
        type: [String, Array] as PropType<Trigger | Trigger[]>,
        default: ['hover', 'focus'],
        validator: (v: Trigger | Trigger[]) => {
            if (Array.isArray(v)) {
                return v.every(t => triggers.includes(t));
            }

            return triggers.includes(v);
        },
    },
};
