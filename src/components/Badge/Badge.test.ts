import Badge from '.';

describe('template', () => {
    componentRenderTest(Badge);

    componentSlotRenderTest(Badge);

    componentWrapperClassTest(Badge, {pill: true}, 'rounded-pill');

    componentWrapperClassTest(Badge, {variant: 'danger'}, 'bg-danger');
});
