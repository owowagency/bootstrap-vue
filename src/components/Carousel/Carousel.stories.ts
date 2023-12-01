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
        description: 'Munchie the kitten',
        image: 'https://placekitten.com/850/475',
        title: 'Kitten #3',
    },
];

export default {
    title: 'Components/Carousel',
    component: Carousel,
    argTypes: {
        dark: {
            control: {type: 'boolean'},
        },
        fade: {
            control: {type: 'boolean'},
        },
        hideControls: {
            control: {type: 'boolean'},
        },
        hideIndicators: {
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

const slots = (args) => ({
    components: {Carousel},
    setup: () => ({args}),
    template: `
        <div class="container">
            <Carousel
                id="Carousel"
                v-bind="args"
            >
                <template #control-prev="{ dataset }">
                    <div 
                        v-bind="dataset"
                        style="
                            position: absolute; 
                            left: 10px; 
                            top: calc(50% - 20px);
                            width:40px;
                            height:40px;
                            background:green;
                        " 
                    />
                </template>

                <template #control-next="{ dataset }">
                    <div 
                        v-bind="dataset"
                        style="
                            position: absolute; 
                            right: 10px; 
                            top: calc(50% - 20px);
                            width:40px;
                            height:40px;
                            background:blue;
                        " 
                    />
                </template>

                <template #indicator="{ index, activeIndex, slide, dataset }">
                    <div 
                        v-bind="dataset" 
                        :class="{active: index === activeIndex}" 
                        style="
                            background: red;
                            border-radius: 50%;
                            width: 20px;
                            height: 20px;
                            border: none;
                        "
                    />
                </template>
            </Carousel>
        </div>
    `,
});

export const CustomSlotContent = slots.bind({});

CustomSlotContent.args = {
    slides,
};
