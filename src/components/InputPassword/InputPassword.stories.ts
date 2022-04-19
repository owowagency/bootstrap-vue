import InputPassword from '.';
import {ref} from 'vue';
import {sizes} from '@/composables/useSize';

export default {
    title: 'Forms/Input password',
    component: InputPassword,
    argTypes: {
        size: {
            control: {type: 'select'},
            options: sizes,
        },
    },
};

const template = (args) => ({
    components: {InputPassword},
    setup: () => ({args, value: ref('test')}),
    template: '<InputPassword v-model="value" v-bind="args" />',
});

export const Default = template.bind({});

export const Sizing = (args) => ({
    components: {InputPassword},
    setup() {
        return {args, sizes};
    },
    template: '<InputPassword v-for="s of sizes" class="mb-1" :size="s" v-bind="args">',
});

export const Rules = template.bind({});

Rules.args = {
    rules: [
        {
            rule: /\d/,
            message: 'One number',
        },
        {
            rule: /[a-z]/,
            message: 'One lowercase character',
        },
        {
            rule: /[A-Z]/,
            message: 'One upper character',
        },
        {
            rule: /.{7,}/,
            message: '7 characters',
        },
    ],
};
