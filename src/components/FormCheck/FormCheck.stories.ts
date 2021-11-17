import FormCheck from '.';

export default {
    title: 'Forms/Form check',
    component: FormCheck,
    argTypes: {},
};

const template = (args) => ({
    components: {FormCheck},
    setup() {
        return {args};
    },
    template: `
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" :model-value="true" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled :model-value="true" />
    `,
});

export const Checkbox = template.bind({});

Checkbox.args = {
    label: 'I am a checkbox',
    type: 'checkbox',
};

export const Radio = (args) => ({
    components: {FormCheck},
    setup() {
        return {args};
    },
    template: `
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" model-value="1" value="1" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled model-value="2" value="2" />
    `,
});

Radio.args = {
    label: 'I am a radio',
    type: 'radio',
};

export const Switch = template.bind({});

Switch.args = {
    label: 'I am a switch',
    switch: true,
};

export const Inline = template.bind({});

Inline.args = {
    inline: true,
    label: 'I am a inline',
};
