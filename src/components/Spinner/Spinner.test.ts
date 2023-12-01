import Spinner from '.';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(Spinner);

    componentWrapperClassTest(Spinner, {type: 'grow'}, 'spinner-grow');

    componentWrapperClassTest(Spinner, {size: 'lg'}, 'spinner-border-lg');

    componentWrapperClassTest(Spinner, {variant: 'danger'}, 'text-danger');
});
