import templateString, {Value} from '../../library/templateString';
import {computed} from 'vue';

export default (template: string, value: Value | Value[]) => ({
    templatedString: computed(() => templateString(template, value)),
});
