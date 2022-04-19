import {PropType} from 'vue';

export const tagProps = (d = 'div') => ({
    tag: {
        type: String as PropType<keyof HTMLElementTagNameMap>,
        default: d,
    },
});
