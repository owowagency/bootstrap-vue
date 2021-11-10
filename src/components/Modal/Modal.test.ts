import * as bootstrap from 'bootstrap';
import Modal from '.';
import {shallowMount} from '@vue/test-utils';

jest.mock('bootstrap', () => ({
    Modal: {
        getInstance: jest.fn(),
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
});

describe('onMounted', () => {
    it('sets bsModal', async() => {
        const wrapper = await shallowMount(Modal);

        expect(bootstrap.Modal.getInstance).toBeCalledWith(wrapper.vm.$refs.modal);

        // TODO: Unable to assert bsModal value.
    });
});

// TODO: Unable to assert dispose call on bsModal.
