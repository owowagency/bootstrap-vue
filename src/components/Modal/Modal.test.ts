import Modal from '.';
import {shallowMount} from '@vue/test-utils';

jest.mock('bootstrap', () => ({
    Modal: {
        getOrCreateInstance: jest.fn(),
    },
}));

const textPropTest = (propName: string) => {
    it(`renders ${propName}`, () => {
        const text = `I am a ${propName}`;

        const wrapper = shallowMount(Modal, {
            props: {[propName]: text},
        });

        expect(wrapper.find(`.modal-${propName}`).text()).toBe(text);
    });
};

describe('template', () => {
    componentRenderTest(Modal, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(Modal, 'header');

    componentSlotRenderTest(Modal, 'title');

    componentSlotRenderTest(Modal);

    componentSlotRenderTest(Modal, 'footer');

    ['title', 'body'].forEach(textPropTest);

    ['show', 'shown', 'hide', 'hidden', 'hidePrevented'].forEach((event: string) => {
        componentBootstrapEventTest(
            Modal,
            '.modal',
            event,
            'modal',
        );
    });
});

describe('onMounted', () => {
    it('sets bsModal', async() => {
        const wrapper = await shallowMount(Modal);

        expect((await import('bootstrap')).Modal.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.modal, {});

        // TODO: Unable to assert bsModal value.
    });

    it('registers modal even listeners', async() => {
        // TODO: Unable to assert events.
    });
});

describe('hideCloseBtn', () => {
    it('hides close button', async() => {
        const wrapper = await shallowMount(
            Modal,
            {props: {hideCloseBtn: true}},
        );

        expect(wrapper.find('[data-bs-dismiss="modal"]').exists()).toBeFalsy();
    });
});

// TODO: Unable to assert dispose call on bsModal.
