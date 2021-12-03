import InputPassword from '.';

describe('template', () => {
    componentRenderTest(InputPassword);

    componentWrapperClassTest(InputPassword, {size: 'lg'}, 'input-group-lg');
});
