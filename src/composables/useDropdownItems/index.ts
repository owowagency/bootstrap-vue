import {PropType} from 'vue';

export interface Item {
    active?: boolean;
    label?: string;
    divider?: boolean;
    header?: boolean;
}

export const dropdownItemsProps = {
    items: {
        type: Array as PropType<Item>,
        default: () => [],
    },
};
