import {PropType, computed, unref} from 'vue';
import useDisabled, {disabledProps} from '../../composables/useDisabled';
import useSize, {Size, sizeProps} from '../../composables/useSize';
import {MaybeRef} from '../..';
import useClasses from '../useClasses';

interface Props {
    disabled?: boolean;
    size?: Size;
};

export default (props: MaybeRef<Props>) => useClasses(computed(() => [
    useDisabled(unref(props).disabled).disabledClass.value,
    useSize(unref(props).size, 'form-select-{0}').sizeClass.value,
]));

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
