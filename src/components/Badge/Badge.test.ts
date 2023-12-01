import Badge from '.';
import {describe} from 'vitest'

describe('template', () => {
    componentRenderTest(Badge);

    componentSlotRenderTest(Badge);

    componentWrapperClassTest(Badge, {pill: true}, 'rounded-pill');

    componentWrapperClassTest(Badge, {variant: 'danger'}, 'bg-danger');
});
