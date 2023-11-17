import {dropdownItemsProps} from '@/composables/useDropdownItems';
import {sizeProps} from '@/composables/useSize';
import {variantProps} from '@/composables/useVariant';

export const dropdownProps = {
    ...dropdownItemsProps,
    menuClass: {
        type: String,
        default: undefined,
    },
    ...sizeProps,
    /**
     * The classes that will be forwarded to the toggle
     */
    toggleClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    ...variantProps,
};
