import Btn from '@/components/Button';
import Offcanvas from '.';
import {placements} from '@/composables/usePlacement';

export default {
    title: 'Components/Offcanvas',
    component: Offcanvas,
    argTypes: {
        backdrop: {
            control: {type: 'boolean'},
        },
        header: {
            control: {type: 'text'},
        },
        noBody: {
            control: {type: 'boolean'},
        },
        placement: {
            control: {type: 'select'},
            options: placements,
        },
        scroll: {
            control: {type: 'boolean'},
        },
        show: {
            control: {type: 'boolean'},
        },
    },
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

        <p style="max-width: 100px;">
            Dummy content to make the container scrollable.
            Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. Obi-Wan is here. The Force is with him. You mean it controls your actions? As you wish. I find your lack of faith disturbing.
            Hokey religions and ancient weapons are no match for a good blaster at your side, kid. Still, she's got a lot of spirit. I don't know, what do you think? Don't underestimate the Force. Still, she's got a lot of spirit. I don't know, what do you think?
        </p>

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
