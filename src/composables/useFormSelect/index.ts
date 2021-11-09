import useDisabled, {disabledProps} from '../../composables/useDisabled';
import useSize, {Size, sizeProps} from '../../composables/useSize';
import {PropType} from 'vue';
import useClasses from '../useClasses';

interface Props {
    disabled?: boolean;
    size?: Size;
};

export default (props: Props) => useClasses([
    useDisabled(props.disabled).disabledClass.value,
    useSize(props.size, 'form-select-{0}').sizeClass.value,
]);

interface Item {
    label?: string;
    selected?: boolean;
    value: string | number | undefined;
}

export const formSelectProps = {
    ...disabledProps,
    items: {
        type: Array as PropType<Item[]>,
        default: () => [],
    },
    ...sizeProps,
};
