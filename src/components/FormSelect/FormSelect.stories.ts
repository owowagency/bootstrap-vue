import FormSelect from '.';
import {sizes} from '@/composables/useSize';

export default {
    title: 'Forms/Form select',
    component: FormSelect,
    argTypes: {},
};

const defaultArgs = {
    items: [
        {value: 'Item 1'},
        {value: 'Item 2', label: 'ITEM 2', selected: true},
        {value: 'Item 3'},
    ],
};

const template = (args) => ({
    components: {FormSelect},
    setup: () => ({args}),
    template: '<FormSelect v-bind="args" />',
});

export const Default = template.bind({});

Default.args = defaultArgs;

export const Disabled = template.bind({});

Disabled.args = {
    ...defaultArgs,
    disabled: true,
};

export const Sizing = (args) => ({
    components: {FormSelect},
    setup: () => ({args, sizes}),
    template: '<FormSelect v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />',
});

Sizing.args = defaultArgs;
