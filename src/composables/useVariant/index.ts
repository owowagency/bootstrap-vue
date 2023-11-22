import {PropType} from 'vue';
import useStringTemplate from '@/composables/useStringTemplate';

export const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'] as const;

export type Variant = typeof variants[number] | string;

export default (variant: MaybeRef<Variant>, classTemplate: MaybeRef<string>) => {
    const {templatedString} = useStringTemplate(classTemplate, variant);

    return {variantClass: templatedString};
};

export const variantProp = (defaultValue: Variant | '' | undefined = 'primary') => {
    return {
        type: String as PropType<Variant>,
        default: defaultValue,
    };
};

export const variantProps = {
    variant: variantProp(),
};
