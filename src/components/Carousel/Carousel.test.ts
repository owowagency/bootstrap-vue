import Carousel from '.';
import {shallowMount} from '@vue/test-utils';

jest.mock('bootstrap', () => ({
    Carousel: {
        getOrCreateInstance: jest.fn(),
    },
}));

describe('template', () => {
    componentRenderTest(Carousel, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    // componentSlotRenderTest(Carousel, 'header');

    // componentSlotRenderTest(Carousel);

    // componentWrapperAttributeTest(Carousel, {backdrop: true}, 'data-bs-backdrop', 'true');

    // componentWrapperAttributeTest(Carousel, {scroll: true}, 'data-bs-scroll', 'true');

    it('does not add body class', () => {
        const wrapper = shallowMount(Carousel, {
            props: {noBody: true},
        });

        expect(wrapper.find('.Carousel-body').exists()).toBe(false);
    });
});
