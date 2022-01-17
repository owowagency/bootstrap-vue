
import Btn from '@/components/Button';
import Modal from '.';

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        hideCloseBtn: {
            control: {type: 'boolean'},
        },
    },
};

const template = (args) => ({
    components: {Btn, Modal},
    setup: () => ({args}),
    template: `
        <Modal
            class="d-block"
            title="Modal title"
            text="Modal body text goes here."
            v-bind="args"
        >
            <template #footer>
                <Btn variant="secondary">
                    Close
                </Btn>

                <Btn>
                    Save changes
                </Btn>
            </template>
        </Modal>
    `,
});

export const Default = template.bind({});

export const Demo = (args) => ({
    components: {Btn, Modal},
    setup: () => ({args}),
    template: `
        <Btn
            data-bs-toggle="modal"
            data-bs-target="#modal"
        >
            Launch demo modal
        </Btn>

        <Modal
            id="modal"
            title="Modal title"
            text="Modal body text goes here."
            v-bind="args"
        >
            <template #footer>
                <Btn
                    data-bs-dismiss="modal"
                    variant="secondary"
                >
                    Close
                </Btn>

                <Btn>
                    Save changes
                </Btn>
            </template>
        </Modal>
    `,
});
