import ButtonState from '.';

export default {
    title: 'Components/Button state',
    component: ButtonState,
    argTypes: {},
};

const template = (args) => ({
    components: {ButtonState},
    setup: () => ({args}),
    template: '<ButtonState v-bind="args">Button state</ButtonState>',
});

export const Loading = template.bind({});

Loading.args = {loading: true};

export const Error = template.bind({});

Error.args = {error: true};

export const Success = template.bind({});

Success.args = {success: true};
