import {describe, expect, it, vi} from 'vitest'
import Modal from '.';
import {shallowMount} from '@vue/test-utils';

vi.mock('bootstrap', () => ({
    Modal: {
        getOrCreateInstance: vi.fn(),
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

    it('does not render modal-title when not given', () => {
        // Don't give title prop or slot.
        const wrapper = shallowMount(Modal);

        expect(wrapper.find('.modal-title').exists()).toBe(false);

        // Assert that .btn-close is still rendered.
        expect(wrapper.find('.btn-close').exists()).toBe(true);
    });

    ['show', 'shown', 'hide', 'hidden', 'hidePrevented'].forEach((event: string) => {
        componentBootstrapEventTest(
            Modal,
            '.modal',
            event,
            'modal',
        );
    });

    it('renders given custom classes', () => {
        const wrapper = shallowMount(Modal, {
            props: {
                id: 'owow-modal',
                class: 'custom-class',
                headerClass: 'header-class',
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('adds centered class when modalCentered prop set', () => {
        const wrapper = shallowMount(Modal, {
            props: {modalCentered: true},
        });

        expect(wrapper.find('.modal-dialog').classes()).toContain('modal-dialog-centered');
    });

    it('adds scrollable class when modalScrollable prop set', () => {
        const wrapper = shallowMount(Modal, {
            props: {modalScrollable: true},
        });

        expect(wrapper.find('.modal-dialog').classes()).toContain('modal-dialog-scrollable');
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
