import Spinner from '.';
import {sizes} from '../../composables/useSize';
import {types} from './Spinner.vue';
import {variants} from '../../composables/useVariant';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    argTypes: {
        type: {
            control: {type: 'select'},
            options: types,
        },
        size: {
            control: {type: 'select'},
            options: sizes,
        },
        variant: {
            control: {type: 'select'},
            options: variants,
        },
    },
};

const template = (args) => ({
    components: {Spinner},
    setup: () => ({args}),
    template: '<Spinner v-bind="args" />',
});

export const Default = template.bind({});

export const Sizing = (args) => ({
    components: {Spinner},
    setup: () => ({args, sizes}),
    template: '<Spinner v-for="s of sizes" class="me-1" :size="s" v-bind="args" />',
});

export const Type = (args) => ({
    components: {Spinner},
    setup: () => ({args, types}),
    template: '<Spinner v-for="t of types" class="me-1" :type="t" v-bind="args" />',
});

export const Variants = (args) => ({
    components: {Spinner},
    setup: () => ({args, variants}),
    template: '<Spinner v-for="v of variants" class="me-1" :variant="v" v-bind="args" />',
});
