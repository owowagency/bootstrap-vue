import {computed} from 'vue';

export default (value: boolean) => ({
    activeClass: computed(() => value ? 'active' : undefined),
});

export const activeProps = {
    active: {
        type: Boolean,
        default: false,
    },
};
