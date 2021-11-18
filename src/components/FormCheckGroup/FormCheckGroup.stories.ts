import FormCheckGroup from '.';
import {ref} from 'vue';
import {types} from '../FormCheck';

export default {
    title: 'Forms/Form check group',
    component: FormCheckGroup,
    argTypes: {
        disabled: {
            control: {type: 'boolean'},
        },
        switch: {
            control: {type: 'boolean'},
        },
        type: {
            control: {type: 'select'},
            options: types,
        },
    },
};

const items = [
    {label: 'Item one', value: 'one'},
    {label: 'Item two', value: 'two'},
];

const template = (args) => ({
    components: {FormCheckGroup},
    setup: () =>({args, value: ref([])}),
    template: `
        <FormCheckGroup v-model="value" v-bind="args" />
    `,
});

export const Checkbox = template.bind({});

Checkbox.args = {
    items,
    type: 'checkbox',
};

export const Radio = template.bind({});

Radio.args = {
    items,
    type: 'radio',
};

export const Disabled = template.bind({});

Disabled.args = {
    disabled: true,
    items,
};

export const Switch = template.bind({});

Switch.args = {
    switch: true,
    items,
};
