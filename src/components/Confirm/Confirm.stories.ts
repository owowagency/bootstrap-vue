import Btn from '@/components/Button';
import Confirm from '.';

export default {
    title: 'Components/Confirm',
    component: Confirm,
    argTypes: {},
};

const template = (args) => ({
    components: {Btn, Confirm},
    setup: () => ({args}),
    template: `
        <Btn
            data-bs-toggle="modal"
            data-bs-target="#confirm"
        >
            Launch demo confirm
        </Btn>

        <Confirm
            id="confirm"
            v-bind="args"
        />
    `,
});

export const Default = template.bind({});
