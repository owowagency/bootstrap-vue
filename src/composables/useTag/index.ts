import {PropType} from 'vue';

export const tagProps = {
    tag: {
        type: String as PropType<keyof HTMLElementTagNameMap>,
        default: 'div',
    },
};
