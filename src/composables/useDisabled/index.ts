import {computed, unref} from 'vue';
import {MaybeRef} from '../..';

export default (value: MaybeRef<boolean>) => ({
    disabledClass: computed(() => unref(value) ? 'disabled' : undefined),
});

export const disabledProps = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
