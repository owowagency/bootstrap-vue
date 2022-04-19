import {PropType} from 'vue';
import useStringTemplate from '@/composables/useStringTemplate';

export const sizes = ['sm', 'md', 'lg', 'xl'] as const;

export type Size = typeof sizes[number];

export default (size: MaybeRef<Size>, classTemplate: MaybeRef<string>) => {
    const {templatedString} = useStringTemplate(classTemplate, size);

    return {sizeClass: templatedString};
};

export const sizeProps = {
    size: {
        type: String as PropType<Size>,
        default: 'md',
        validator: (v: Size) => sizes.includes(v),
    },
};
