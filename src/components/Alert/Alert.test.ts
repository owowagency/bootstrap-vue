import Alert from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(Alert);

    componentSlotRenderTest(Alert);

    componentWrapperClassTest(Alert, {variant: 'danger'}, 'alert-danger');
});
