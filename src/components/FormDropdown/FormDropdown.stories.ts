import FormDropdown from '.';
import {ref} from 'vue';
import {sizes} from '@/composables/useSize';

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

Disabled.args = {
    disabled: true,
    ...defaultArgs,
};

export const Sizing = (args) => ({
    components: {FormDropdown},
    setup: () => ({args, sizes}),
    template: '<FormDropdown v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />',
});

Sizing.args = defaultArgs;

export const Search = (args) => ({
    components: {FormDropdown},
    setup: () => ({
        args,
        search: ref(''),
        value: ref(),
    }),
    template: `
        <FormDropdown
            v-model:search-query="search"
            v-model="value"
            v-bind="args"
        />
    `,
});

Search.args = {
    search: true,
    ...defaultArgs,
};
