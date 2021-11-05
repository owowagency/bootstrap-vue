import Badge from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(Badge);

    componentSlotRenderTest(Badge);

    componentWrapperClassTest(Badge, {pill: true}, 'rounded-pill');

    componentWrapperClassTest(Badge, {variant: 'danger'}, 'bg-danger');
});
