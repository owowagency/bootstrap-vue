import FormPills from '.';
import {ref} from 'vue';

export default {
    title: 'Forms/Form pills',
    component: FormPills,
    argTypes: {
        editItemOnBackspace: {
            control: {type: 'boolean'},
        },
        maxItems: {
            control: {type: 'number'},
        },
        placeholder: {
            control: {type: 'text'},
        },
    },
};

const template = (args) => ({
    components: {FormPills},
    setup: () => ({args, value: ref([])}),
    template: '<FormPills v-model="value" v-bind="args" />',
});

export const Default = template.bind({});
