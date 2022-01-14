import {PropType} from 'vue';
import useStringTemplate from '@/composables/useStringTemplate';

export const modalSizes = ['sm', 'lg', 'xl'] as const;

export type ModalSize = typeof modalSizes[number];

export default (size: MaybeRef<ModalSize>) => {
    const {templatedString} = useStringTemplate('modal-{0}', size);

    return {sizeClass: templatedString};
};

export const modalSizeProps = {
    modalSize: {
        type: String as PropType<ModalSize>,
        default: null,
        validator: (v: ModalSize) => modalSizes.includes(v),
    },
};
