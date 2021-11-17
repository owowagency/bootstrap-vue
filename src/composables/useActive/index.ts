import {computed, unref} from 'vue';
import {MaybeRef} from '../..';

export default (value: MaybeRef<boolean>) => ({
    activeClass: computed(() => unref(value) ? 'active' : undefined),
});

export const activeProps = {
    active: {
        type: Boolean,
        default: false,
    },
};
