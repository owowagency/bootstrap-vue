import ButtonClose from '.';

export default {
    title: 'Components/Button close',
    component: ButtonClose,
};

const template = (args) => ({
    components: {ButtonClose},
    setup: () => ({args}),
    template: '<ButtonClose v-bind="args" />',
});

export const Default = template.bind({});

export const Disabled = template.bind({});

Disabled.args = {
    disabled: true,
};

