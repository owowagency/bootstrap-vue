import InputGroup from '.';
import {sizes} from '@/composables/useSize';

export default {
    title: 'Forms/Input group',
    component: InputGroup,
    argTypes: {
        append: {
            control: {type: 'text'},
        },
        prepend: {
            control: {type: 'text'},
        },
        size: {
            control: {type: 'select'},
            options: sizes,
        },
    },
};

const template = (args) => ({
    components: {InputGroup},
    setup: () => ({args}),
    template: '<InputGroup v-bind="args"><input class="form-control" type="number"></InputGroup>',
});

export const Default = template.bind({});

Default.args = {
    append: '.00',
    prepend: '€',
};

export const Sizing = (args) => ({
    components: {InputGroup},
    setup() {
        return {args, sizes};
    },
    template: '<InputGroup v-for="s of sizes" class="mb-1" :size="s" v-bind="args"><input class="form-control" type="number"></InputGroup>',
});

Sizing.args = {
    append: '.00',
    prepend: '€',
};
