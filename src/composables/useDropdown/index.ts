import {dropdownItemsProps} from '..//useDropdownItems';
import {sizeProps} from '..//useSize';
import {variantProps} from '..//useVariant';

export const dropdownProps = {
    ...dropdownItemsProps,
    menuClass: {
        type: String,
        default: undefined,
    },
    ...sizeProps,
    ...variantProps,
};
