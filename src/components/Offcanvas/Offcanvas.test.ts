import {describe, expect, it, vi} from 'vitest'
import Offcanvas from '.';
import {shallowMount} from '@vue/test-utils';

vi.mock('bootstrap', () => ({
    Offcanvas: {
        getOrCreateInstance: vi.fn(),
    },
}));

describe('template', () => {
    componentRenderTest(Offcanvas, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(Offcanvas, 'header');

    componentSlotRenderTest(Offcanvas);

    componentWrapperAttributeTest(Offcanvas, {backdrop: true}, 'data-bs-backdrop', 'true');

    componentWrapperAttributeTest(Offcanvas, {scroll: true}, 'data-bs-scroll', 'true');

    componentWrapperClassTest(Offcanvas, {placement: 'end'}, 'offcanvas-end');

    componentWrapperClassTest(Offcanvas, {show: true}, 'show');

    it('renders header', () => {
        const text = 'I am a header';

        const wrapper = shallowMount(Offcanvas, {
            props: {header: text},
        });

        expect(wrapper.find('.offcanvas-header').text()).toBe(text);
    });

    it('does not add body class', () => {
        const wrapper = shallowMount(Offcanvas, {
            props: {noBody: true},
        });

        expect(wrapper.find('.offcanvas-body').exists()).toBe(false);
    });
});

describe('onMounted', () => {
    it('sets bsOffcanvas', async() => {
        const wrapper = await shallowMount(Offcanvas);

        expect((await import('bootstrap')).Offcanvas.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.offcanvas, {});

        // TODO: Unable to assert bsOffcanvas value.
    });
});
