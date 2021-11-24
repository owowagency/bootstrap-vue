import FormImage from '.';
import {ref} from 'vue';

export default {
    title: 'Forms/Form image',
    component: FormImage,
    argTypes: {},
};

const template = (args) => ({
    components: {FormImage},
    setup: () => ({args, value: ref<string>()}),
    template: '<FormImage v-model="value" :preview="preview" v-bind="args" />',
});

export const Default = template.bind({});
