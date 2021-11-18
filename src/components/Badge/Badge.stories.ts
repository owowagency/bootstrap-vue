import Badge from '.';
import Btn from '@/components/Button';
import {variants} from '@/composables/useVariant';

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: variants,
        },
    },
};

const template = (args) => ({
    components: {Badge},
    setup() {
        return {args};
    },
    template: '<Badge v-bind="args">I am an Badge</Badge>',
});

export const Default = template.bind({});

const variantsTemplate = (args) => ({
    components: {Badge},
    setup: () => ({args, variants}),
    template: '<Badge v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Badge>',
});

export const Variants = variantsTemplate.bind({});

export const Pill = variantsTemplate.bind({});

Pill.args = {
    pill: true,
};

export const Headings = (args) => ({
    components: {Badge},
    setup: () => ({args}),
    template: `
        <h1>Example heading <Badge>New</Badge></h1>
        <h2>Example heading <Badge>New</Badge></h2>
        <h3>Example heading <Badge>New</Badge></h3>
        <h4>Example heading <Badge>New</Badge></h4>
        <h5>Example heading <Badge>New</Badge></h5>
        <h6>Example heading <Badge>New</Badge></h6>
    `,
});

export const Buttons = (args) => ({
    components: {Badge, Btn},
    setup: () => ({args}),
    template: `
        <Btn class="me-1">Notifications <Badge variant="danger">4</Badge></Btn>
        <Btn class="position-relative">Notifications <Badge class="position-absolute top-0 start-100 translate-middle  border border-light" pill variant="danger">99+</Badge></Btn>
    `,
});
