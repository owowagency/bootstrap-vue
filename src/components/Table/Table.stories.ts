import OwTable from '.';

export default {
    title: 'Content/Table',
    component: OwTable,
    argTypes: {
    },
};

const template = (args) => ({
    components: {OwTable},
    setup() {
        return {args};
    },
    template: '<OwTable v-bind="args" />',
});

export const Default = template.bind({});

Default.args = {
    fields: [
        {key: 'firstName', label: 'First name'},
        {key: 'lastName', label: 'Last name'},
    ],
    items: [
        {firstName: 'Anakin', lastName: 'Skywalker'},
        {firstName: 'Jar Jar', lastName: 'Binks'},
    ],
};
