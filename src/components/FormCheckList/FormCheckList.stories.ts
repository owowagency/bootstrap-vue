import FormCheckList from '.';
import {ref} from 'vue';

export default {
    title: 'Forms/Form check list',
    component: FormCheckList,
    argTypes: {
    },
};

const template = (args) => ({
    components: {FormCheckList},
    setup: () =>({args, value: ref([])}),
    template: `
        <FormCheckList v-bind="args" v-model="value" />
    `,
});

export const Checkbox = template.bind({});

Checkbox.args = {
    items: [
        {value: 'one'},
        {label: 'Item two', value: 'two'},
    ],
};
