import InputPassword from '.';
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
    setup: () => ({args}),
    template: '<InputPassword v-bind="args" />',
});

export const Default = template.bind({});

export const Sizing = (args) => ({
    components: {InputPassword},
    setup() {
        return {args, sizes};
    },
    template: '<InputPassword v-for="s of sizes" class="mb-1" :size="s" v-bind="args">',
});
