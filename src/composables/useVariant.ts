import {PropType} from 'vue';
import useStringTemplate from '@/composables/useStringTemplate';

export const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'] as const;

export type Variant = typeof variants[number];

export default (variant: Variant, classTemplate: string) => {
    const {templatedString} = useStringTemplate(classTemplate, variant);

    return {variantClass: templatedString};
};

export const variantProps = {
    variant: {
        type: String as PropType<Variant>,
        default: 'primary',
        validation: (v: Variant) => variants.includes(v),
    },
};
