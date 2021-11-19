import Alert from '.';
import {variants} from '@/composables/useVariant';

export default {
    title: 'Components/Alerts',
    component: Alert,
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: variants,
        },
    },
};

const template = (args) => ({
    components: {Alert},
    setup: () => ({args}),
    template: '<Alert v-bind="args">I am an alert</Alert>',
});

export const Default = template.bind({});

const variantsTemplate = (args) => ({
    components: {Alert},
    setup: () => ({args, variants}),
    template: '<Alert v-for="v of variants" class=" mb-1" :variant="v" v-bind="args">A simple {{ v }} alert - <a href="#" class="alert-link">Check it out!</a></Alert>',
});

export const Variants = variantsTemplate.bind({});

export const AdditionalContent = (args) => ({
    components: {Alert},
    setup: () => ({args}),
    template: `
        <Alert v-bind="args">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
    `,
});
