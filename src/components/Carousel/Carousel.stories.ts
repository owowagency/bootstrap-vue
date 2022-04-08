import Carousel from '.';

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
    },
};

const template = (args) => ({
    components: {Carousel},
    setup: () => ({args}),
    template: `
        <Carousel
            id="Carousel"
            v-bind="args"
        >
            Carousel body
        </Carousel>
    `,
});

export const Default = template.bind({});
