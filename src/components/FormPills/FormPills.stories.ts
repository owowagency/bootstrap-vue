import FormPills from '.';

export default {
    title: 'Forms/Form pills',
    component: FormPills,
    argTypes: {},
};

const template = (args) => ({
    components: {FormPills},
    setup: () => ({args}),
    template: '<FormPills v-bind="args" />',
});

export const Default = template.bind({});
