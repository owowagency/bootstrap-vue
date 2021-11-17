import {PropType} from 'vue';
import useStringTemplate from '../useStringTemplate';

export const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'] as const;

export type Variant = typeof variants[number];

export default (variant: Variant, classTemplate: string) => {
    const {templatedString} = useStringTemplate(classTemplate, variant);

    return {variantClass: templatedString};
};

export const variantProp = (defaultValue: Variant | '' | undefined = 'primary') => {
    return {
        type: String as PropType<Variant>,
        default: defaultValue,
        validator: (v?: Variant) => v ? variants.includes(v) : true,
    };
};

export const variantProps = {
    variant: variantProp(),
};
