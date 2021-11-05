import Container from '.';

describe('template', () => {
    componentRenderTest(Container);

    componentSlotRenderTest(Container);

    componentWrapperClassTest(Container, {fluid: true}, 'container-fluid');
});
