import Btn from '../Button';
import ButtonGroup from '.';
import {sizes} from '../../composables/useSize';

export default {
    title: 'Components/Button group',
    component: ButtonGroup,
    argTypes: {},
};

const template = (args, btnArgs) => ({
    components: {Btn, ButtonGroup},
    setup: () => ({args, btnArgs}),
    template: `
        <ButtonGroup v-bind="args">
            <Btn v-bind="btnArgs">Left</Btn>
            <Btn v-bind="btnArgs">Middle</Btn>
            <Btn v-bind="btnArgs">Right</Btn>
        </ButtonGroup>
    `,
});

export const Default = template.bind({}, {});

export const Outlined = template.bind({}, {}, {outline: true});

export const Sizing = (args) => ({
    components: {Btn, ButtonGroup},
    setup: () => ({args, sizes}),
    template: `
        <ButtonGroup
            v-for="s of sizes"
            class="mb-1 me-1"
            :size="s"
            v-bind="args"
        >
            <Btn>Left</Btn>
            <Btn>Middle</Btn>
            <Btn>Right</Btn>
        </ButtonGroup>
    `,
});

export const Vertical = template.bind({}, {});

Vertical.args = {
    vertical: true,
};
