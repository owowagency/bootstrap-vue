import {computed} from 'vue';

export default (value: boolean) => ({
    disabledClass: computed(() => value ? 'disabled' : undefined),
});

export const disabledProps = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
