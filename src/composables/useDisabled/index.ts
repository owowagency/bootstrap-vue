import {computed, unref} from 'vue';

export default (value: MaybeRef<boolean>) => ({
    disabledClass: computed(() => unref(value) ? 'disabled' : undefined),
});

export const disabledProps = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
