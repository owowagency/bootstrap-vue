import {computed} from 'vue';

export default (values: (string|undefined)[]) => ({
    classes: computed(() => values.filter((v, i, s) => {
        return !!v && s.indexOf(v) === i;
    })),
});
