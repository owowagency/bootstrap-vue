import Btn from '@/components/Button';
import Offcanvas from '.';

export default {
    title: 'Components/Offcanvas',
    component: Offcanvas,
    argTypes: {},
};

const template = (args) => ({
    components: {Btn, Offcanvas},
    setup: () => ({args}),
    template: `
        <Btn
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
        >
            Launch offcanvas
        </Btn>

        <Offcanvas
            id="offcanvas"
            header="Offcanvas header"
            v-bind="args"
        >
            Offcanvas body
        </Offcanvas>
    `,
});

export const Default = template.bind({});
