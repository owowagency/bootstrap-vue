import {computed, unref} from 'vue';
import {MaybeRef} from '../..';

export default (values: MaybeRef<(string|undefined)[]>) => ({
    classes: computed(() => unref(values)
        .filter((v, i, s) => !!v && s.indexOf(v) === i),
    ),
});
