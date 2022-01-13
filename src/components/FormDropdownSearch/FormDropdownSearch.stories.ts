import FormDropdownSearch from '.';
import {ref} from 'vue';
import {sizes} from '@/composables/useSize';

export default {
    title: 'Forms/Form dropdown search',
    component: FormDropdownSearch,
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
    components: {FormDropdownSearch},
    setup() {
        const value = ref();

        return {args, value};
    },
    template: `
        <FormDropdownSearch
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
    components: {FormDropdownSearch},
    setup: () => ({args, sizes}),
    template: '<FormDropdownSearch v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />',
});

Sizing.args = defaultArgs;

export const Search = (args) => ({
    components: {FormDropdownSearch},
    setup: () => ({
        args,
        search: ref(''),
        value: ref(),
    }),
    template: `
        <FormDropdownSearch
            v-model:search="search"
            v-model="value"
            v-bind="args"
        />
    `,
});

Search.args = {
    searchable: true,
    ...defaultArgs,
};
