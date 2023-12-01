import Card from '.';

export default {
    title: 'Components/Cards',
    component: Card,
    argTypes: {},
};

export const Example = (args) => ({
    components: {Card},
    setup() {
        return {args};
    },
    template: `
        <Card
            no-body
            style="width: 18rem"
            v-bind="args"
        >
            <img src="https://picsum.photos/id/237/200/130" class="card-img-top" alt="aaa">

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </Card>
    `,
});

export const Body = (args) => ({
    components: {Card},
    setup() {
        return {args};
    },
    template: `
        <Card
            no-body
            v-bind="args"
        >
            <div class="card-body">
                I am a body
            </div>

            <div class="card-body">
                I am a body
            </div>
        </Card>
    `,
});

export const TitlesTextLinks = (args) => ({
    components: {Card},
    setup() {
        return {args};
    },
    template: `
        <Card v-bind="args">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </Card>
    `,
});

export const HeaderFooter = (args) => ({
    components: {Card},
    setup() {
        return {args};
    },
    template: `
        <Card
            footer="I am a footer"
            header="I am a header"
            text="I am just normal text"
            v-bind="args"
        />
    `,
});
