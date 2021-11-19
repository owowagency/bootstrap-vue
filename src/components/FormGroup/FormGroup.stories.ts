import FormControl from '@/components/FormControl';
import FormGroup from '.';
import {ref} from 'vue';

export default {
    title: 'Forms/Form group',
    component: FormGroup,
    argTypes: {
        ...FormControl.argTypes,
        helpText: {
            control: {type: 'text'},
        },
        invalidFeedback: {
            control: {type: 'text'},
        },
        label: {
            control: {type: 'text'},
        },
        validFeedback: {
            control: {type: 'text'},
        },
    },
};

const template = (args) => ({
    components: {FormGroup},
    setup() {
        args.label = args.label || 'I am a form group';

        return {args, value: ref('')};
    },
    template: '<FormGroup v-model="value" v-bind="args" />',
});

export const Default = template.bind({});

export const Description = template.bind({});

Description.args = {
    description: 'This is some description',
};

export const HelpText = template.bind({});

HelpText.args = {
    helpText: 'This is some help text',
};

export const InvalidFeedback = template.bind({});

InvalidFeedback.args = {
    invalidFeedback: 'This is some invalid feedback',
};

export const ValidFeedback = template.bind({});

ValidFeedback.args = {
    validFeedback: 'This is some valid feedback',
};
