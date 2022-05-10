import {disabledProps} from '@/composables/useDisabled';
import {sizeProps} from '@/composables/useSize';
import {tagProps} from '@/composables/useTag';
import {variantProps} from '@/composables/useVariant';

export const buttonProps = {
    outline: {
        type: Boolean,
        default: false,
    },
    ...disabledProps,
    ...tagProps('button'),
    ...sizeProps,
    ...variantProps,
};
