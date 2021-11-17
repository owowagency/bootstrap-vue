import FormCheckList from '.';
import {ref} from 'vue';

export default {
    title: 'Forms/Form check list',
    component: FormCheckList,
    argTypes: {},
};

const template = (args) => ({
    components: {FormCheckList},
    setup: () =>({args, value: ref([])}),
    template: `
        <FormCheckList v-model="value" type="checkbox" v-bind="args" />
    `,
});

export const Checkbox = template.bind({});

Checkbox.args = {
    items: [
        {value: 'one'},
        {label: 'Item two', value: 'two'},
    ],
};
