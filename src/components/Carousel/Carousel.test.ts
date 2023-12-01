import {describe, expect, it, vi} from 'vitest';
import Carousel from '.';
import {shallowMount} from '@vue/test-utils';

vi.mock('bootstrap', () => ({
    Carousel: {
        getOrCreateInstance: vi.fn(),
    },
    __v_isShallow: true,
}));

const props = {
    slides: [
        {
            image: 'https://placekitten.com/200/200',
            title: 'Kitten #1',
        },
        {
            active: true,
            image: 'https://placekitten.com/200/200',
            title: 'Kitten #2',
        },
        {
            image: 'https://placekitten.com/200/200',
            interval: 1000,
            title: 'Kitten #3',
        },
    ],
};

describe('template', () => {
    componentRenderTest(Carousel, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {
            id: 'dont-change-please',
            ...props,
        },
    });

    componentSlotRenderTest(Carousel, 'default', {props});

    componentSlotRenderTest(Carousel, 'slides', {props});

    componentSlotRenderTest(Carousel, 'caption', {props});

    componentSlotRenderTest(Carousel, 'control-prev', {props});

    componentSlotRenderTest(Carousel, 'control-next', {props});

    componentSlotRenderTest(Carousel, 'indicator', {props});

    componentWrapperAttributeTest(Carousel, {props}, 'data-bs-interval', '5000');

    componentWrapperClassTest(Carousel, {dark: true}, 'carousel-dark');

    componentWrapperClassTest(Carousel, {fade: true}, 'carousel-fade');

    ['slid', 'slide'].forEach((event: string) => {
        componentBootstrapEventTest(
            Carousel,
            '.carousel',
            event,
            'carousel',
        );
    });

    it('sets active index from slides', async() => {
        const wrapper = await shallowMount(
            Carousel,
            {props},
        );

        const slides = wrapper.findAll('.carousel-item');

        expect(slides[0].classes()).not.toContain('active');
        expect(slides[1].classes()).toContain('active');
        expect(slides[2].classes()).not.toContain('active');
    });

    it('sets slide interval from slides', async() => {
        const wrapper = await shallowMount(
            Carousel,
            {props},
        );

        const slides = wrapper.findAll('.carousel-item');

        expect(slides[2].attributes('data-bs-interval')).toContain('1000');
    });
});

describe('onMounted', () => {
    it('sets bsCarousel', async() => {
        const wrapper = await shallowMount(Carousel);

        expect((await import('bootstrap')).Carousel.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.carousel, {});

        // TODO: Unable to assert bsCarousel value.
    });
});

describe('hideControls', () => {
    it('hides the controls', async() => {
        const wrapper = await shallowMount(
            Carousel,
            {
                props: {
                    hideControls: true,
                    ...props,
                },
            },
        );

        expect(wrapper.find('[data-bs-slide]').exists()).toBeFalsy();
    });
});

describe('hideIndicators', () => {
    it('hides the indicators', async() => {
        const wrapper = await shallowMount(
            Carousel,
            {
                props: {
                    hideIndicators: true,
                    ...props,
                },
            },
        );

        expect(wrapper.find('[data-bs-slide-to]').exists()).toBeFalsy();
    });
});
