import {PropType} from 'vue';

export interface Item {
    label?: string;
    divider?: boolean;
    header?: boolean;
};

export const dropdownItemsProps = {
    items: {
        type: Array as PropType<Item>,
        default: () => [],
    },
};
