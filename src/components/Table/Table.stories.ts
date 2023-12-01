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
        {key: 'firstName', label: 'First name', sortable: true, sort: 'asc'},
        {key: 'lastName', label: 'Last name', sortable: true},
        {key: 'gender', label: 'Gender'},
    ],
    items: [
        {firstName: 'Anakin', lastName: 'Skywalker', gender: 'Male'},
        {firstName: 'Jar Jar', lastName: 'Binks', gender: 'Female'},
    ],
    multiSort: false,
    hover: false,
};
