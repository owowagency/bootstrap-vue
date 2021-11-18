import {computed, unref} from 'vue';
import templateString, {Value} from '../../library/templateString';
import {MaybeRef} from '../..';

export default (template: MaybeRef<string>, value: MaybeRef<Value | Value[]>) => ({
    templatedString: computed(() => templateString(unref(template), unref(value))),
});
