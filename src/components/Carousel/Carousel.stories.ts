import Carousel from '.';

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
                :slides="['https://placekitten.com/900/500', 'https://placekitten.com/800/450', 'https://placekitten.com/g/800/450']"
            />
        </div>
    `,
});

export const Default = template.bind({});
