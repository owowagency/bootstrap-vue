import {computed} from 'vue';
import useStringTemplate from '../useStringTemplate';

export default (flush: boolean, classTemplate: string) => {
    const {templatedString} = useStringTemplate(classTemplate, 'flush');

    const flushClass = computed(() => flush ? templatedString.value : undefined);

    return {flushClass};
};

export const flushProps = {
    flush: {
        type: Boolean,
        default: false,
    },
};
