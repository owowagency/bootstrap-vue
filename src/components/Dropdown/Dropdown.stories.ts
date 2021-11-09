import Dropdown from '.';
import DropdownMenu from '../DropdownMenu';
import {sizes} from '../../composables/useSize';
import {variants} from '../../composables/useVariant';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {},
};

const defaultArgs = {
    items: [
        {label: 'Item 1'},
        {label: 'Item 2'},
        {label: 'Item 3'},
    ],
    text: 'I am a dropdown',
};

const template = (args) => ({
    components: {Dropdown},
    setup: () => ({args}),
    template: '<Dropdown v-bind="args" />',
});

export const Default = template.bind({});

Default.args = defaultArgs;

export const Variants = (args) => ({
    components: {Dropdown},
    setup: () => ({args, variants}),
    template: '<Dropdown v-for="v of variants" class="me-1 mb-1 d-inline-block" :variant="v" v-bind="args" />',
});

Variants.args = defaultArgs;

export const Sizing = (args) => ({
    components: {Dropdown},
    setup: () => ({args, sizes}),
    template: '<Dropdown v-for="s of sizes" class="me-1 mb-1 d-inline-block" :size="s" v-bind="args" />',
});

Sizing.args = defaultArgs;

export const Menu = (args) => ({
    components: {DropdownMenu},
    setup: () => ({args}),
    template: '<DropdownMenu class="d-block" v-bind="args" />',
});

Menu.args = {
    items: [
        {label: 'Dropdown header', header: true},
        {label: 'Item one'},
        {label: 'Item two'},
        {label: 'Active item', active: true},
        {label: 'Item three'},
        {divider: true},
        {label: 'Item four'},
        {label: 'Item five'},
    ],
};
