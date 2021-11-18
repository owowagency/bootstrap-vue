import FormImage from '.';
import {ref} from 'vue';

export default {
    title: 'Forms/Form image',
    component: FormImage,
    argTypes: {},
};

const template = (args) => ({
    components: {FormImage},
    setup: () => ({args, value: ref<File>()}),
    template: '<FormImage v-model="value" v-bind="args" />',
});

export const Default = template.bind({});
