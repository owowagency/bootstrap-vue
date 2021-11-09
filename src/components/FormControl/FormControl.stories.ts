import FormControl from '.';
import {sizes} from '../../composables/useSize';
import {types} from '../../composables/useFormControl';

export default {
    title: 'Forms/Form control',
    component: FormControl,
    argTypes: {
        disabled: {
            control: {type: 'boolean'},
        },
        placeholder: {
            control: {type: 'text'},
        },
        plainText: {
            control: {type: 'boolean'},
        },
        readonly: {
            control: {type: 'boolean'},
        },
        size: {
            control: {type: 'select'},
            options: sizes,
        },
        type: {
            control: {type: 'select'},
            options: types,
        },
    },
};

const template = (args) => ({
    components: {FormControl},
    setup() {
        return {args};
    },
    template: '<FormControl v-bind="args" />',
});

export const Default = template.bind({});

Default.args = {
    modelValue: 'I am an input',
    placeholder: 'I am a placeholder',
};

export const Disabled = template.bind({});

Disabled.args = {
    modelValue: 'I am disabled',
    disabled: true,
};

export const PlainText = template.bind({});

PlainText.args = {
    modelValue: 'Plain text',
    plainText: true,
};

export const Readonly = template.bind({});

Readonly.args = {
    modelValue: 'I am readonly',
    readonly: true,
};

export const Type = (args) => ({
    components: {FormControl},
    setup() {
        return {args, types};
    },
    template: '<FormControl v-for="t of types" class="mb-1" :placeholder="t" :type="t" v-bind="args" />',
});
