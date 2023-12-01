import Container from '.';
import {describe} from 'vitest'

describe('template', () => {
    componentRenderTest(Container);

    componentSlotRenderTest(Container);

    componentWrapperClassTest(Container, {fluid: true}, 'container-fluid');
});
