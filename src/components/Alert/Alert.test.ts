import Alert from '.';

describe('template', () => {
    componentRenderTest(Alert);

    componentSlotRenderTest(Alert);

    componentWrapperClassTest(Alert, {variant: 'danger'}, 'alert-danger');
});
