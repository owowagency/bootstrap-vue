import FormDropdownSearch from '.';
import {ref} from 'vue';

export default {
    title: 'Forms/Form dropdown search',
    component: FormDropdownSearch,
    argTypes: {},
};

const defaultArgs = {
    items: [
        {label: 'Item 1'},
        {label: 'Item 2'},
        {label: 'Item 3'},
    ],
};

const template = (args) => ({
    components: {FormDropdownSearch},
    setup: () => ({
        args,
        value: ref(),
    }),
    template: `
        <FormDropdownSearch
            v-model="value"
            v-bind="args"
        />
    `,
});

export const Default = template.bind({});

Default.args = defaultArgs;
