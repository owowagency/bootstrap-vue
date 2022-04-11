import Carousel from '.';
import {CarouselSlide} from '@/components/Carousel/Carousel.vue';

const slides: CarouselSlide[] = [
    {
        description: 'Frank the kitten',
        image: 'https://placekitten.com/900/500',
        title: 'Kitten #1',
    },
    {
        description: 'Snowball the kitten',
        image: 'https://placekitten.com/800/450',
        title: 'Kitten #2',
    },
    {
        description: 'Munchkin the kitten',
        image: 'https://placekitten.com/850/475',
        title: 'Kitten #3',
    },
];

export default {
    title: 'Components/Carousel',
    component: Carousel,
    argTypes: {
        controls: {
            control: {type: 'boolean'},
        },
        dark: {
            control: {type: 'boolean'},
        },
        fade: {
            control: {type: 'boolean'},
        },
        indicators: {
            control: {type: 'boolean'},
        },
        interval: {
            control: {type: 'number'},
        },
    },
};

const template = (args) => ({
    components: {Carousel},
    setup: () => ({args}),
    template: `
        <div class="container">
            <Carousel
                id="Carousel"
                v-bind="args"
            />
        </div>
    `,
});

export const Default = template.bind({});

Default.args = {
    slides,
};
