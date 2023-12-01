import Btn from '.';
import {sizes} from '@/composables/useSize';
import {variants} from '@/composables/useVariant';

export default {
    title: 'Components/Button',
    component: Btn,
    argTypes: {
        disabled: {
            control: {type: 'boolean'},
        },
        outline: {
            control: {type: 'boolean'},
        },
        href: {
            control: {type: 'text'},
        },
        is: {
            control: {type: 'text'},
        },
        text: {
            control: {type: 'text'},
        },
        size: {
            control: {type: 'select'},
            options: sizes,
        },
        to: {
            control: {type: 'text'},
        },
        variant: {
            control: {type: 'select'},
            options: variants,
        },
    },
};

const template = (args) => ({
    components: {Btn},
    setup() {
        return {args};
    },
    template: '<Btn v-bind="args">{{ args.text || "Default" }}</Btn>',
});

export const Default = template.bind({});

const variantsTemplate = (args) => ({
    components: {Btn},
    setup: () => ({args, variants}),
    template: '<Btn v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Btn>',
});

export const Variants = variantsTemplate.bind({});

export const Outline = variantsTemplate.bind({});

Outline.args = {
    outline: true,
};

export const Sizing = (args) => ({
    components: {Btn},
    setup: () => ({args, sizes}),
    template: '<Btn v-for="s of sizes" class="me-1" :size="s" v-bind="args">Button {{ s }}</Btn>',
});

export const Disabled = template.bind({});

Disabled.args = {
    disabled: true,
    text: 'Disabled',
};

export const Anchor = template.bind({});

Anchor.args = {
    href: 'https://github.com/owowagency/bootstrap-vue',
    target: '_blank',
    text: 'Anchor',
};
