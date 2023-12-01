import {computed, unref} from 'vue';

export default (values: MaybeRef<(string|undefined)[]>) => ({
    classes: computed(() => unref(values)
        .filter((v, i, s) => !!v && s.indexOf(v) === i),
    ),
});
