import Tooltip from '.';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {},
};

const defaultArgs = {
};

const template = (args) => ({
    components: {Tooltip},
    setup: () => ({args}),
    template: '<Tooltip v-bind="args" />',
});

export const Default = template.bind({});

Default.args = defaultArgs;
