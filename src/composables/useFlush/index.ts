import {computed, unref} from 'vue';
import {MaybeRef} from '../..';
import useStringTemplate from '../useStringTemplate';

export default (flush: MaybeRef<boolean>, classTemplate: MaybeRef<string>) => {
    const {templatedString} = useStringTemplate(classTemplate, 'flush');

    const flushClass = computed(() => unref(flush) ? unref(templatedString) : undefined);

    return {flushClass};
};

export const flushProps = {
    flush: {
        type: Boolean,
        default: false,
    },
};
