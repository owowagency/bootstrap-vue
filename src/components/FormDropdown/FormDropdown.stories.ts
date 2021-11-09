import FormDropdown from '.';
import {ref} from 'vue';
import {sizes} from '../../composables/useSize';

export default {
    title: 'Forms/Form dropdown',
    component: FormDropdown,
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
    components: {FormDropdown},
    setup() {
        const value = ref();

        return {args, value};
    },
    template: `
        <FormDropdown
            v-model="value"
            v-bind="args"
        />
    `,
});

export const Default = template.bind({});

Default.args = defaultArgs;

export const Disabled = template.bind({});

Default.args = {
    ...defaultArgs,
    disabled: true,
};

export const Sizing = (args) => ({
    components: {FormDropdown},
    setup: () => ({args, sizes}),
    template: '<FormDropdown v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />',
});

Sizing.args = defaultArgs;
