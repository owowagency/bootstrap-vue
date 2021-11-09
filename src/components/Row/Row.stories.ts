import Row, {aligns, justifies} from '.';
import Col from '../Col';
import Container from '../Container';
import {breakpoints} from '../../composables/useBreakpoints';

const numberArg = {control: {type: 'number'}};

export default {
    title: 'Layout/Row',
    component: Row,
    argTypes: {
        cols: numberArg,
        ...Object.fromEntries(breakpoints.map(b => [`cols-${b}`, numberArg])),
        gutters: numberArg,
        ...Object.fromEntries(breakpoints.map(b => [`gutters-${b}`, numberArg])),
        guttersX: numberArg,
        ...Object.fromEntries(breakpoints.map(b => [`gutters-x-${b}`, numberArg])),
        guttersY: numberArg,
        ...Object.fromEntries(breakpoints.map(b => [`gutters-y-${b}`, numberArg])),
    },
};

const template = (args) => ({
    components: {Col, Container, Row},
    setup: () => ({args}),
    template: `
        <Container class="p-3 border">
            <Row v-bind="args">
                <Col
                    v-for="i in 2"
                    class="border bg-light"
                >
                    Column {{ i }}
                </Col>
            </Row>
        </Container>
    `,
});

export const Cols = template.bind({});

Cols.args = {cols: 6};

export const Justify = () => ({
    components: {Col, Container, Row},
    setup: () => ({justifies}),
    template: `
        <Container>
            <Row
                v-for="justify in justifies"
                class="mb-3 p-3 border"
                :justify="justify"
            >
                <Col
                    v-for="i in 2"
                    cols="4"
                    class="border bg-light"
                >
                    {{ justify }}
                </Col>
            </Row>
        </Container>
    `,
});

export const Align = () => ({
    components: {Col, Container, Row},
    setup: () => ({aligns}),
    template: `
        <Container>
            <Row
                v-for="align in aligns"
                :align="align"
                class="mb-3 p-3 border"
                style="height: 10rem"
            >
            <Col
                v-for="i in 3"
                cols="4"
                class="border bg-light"
            >
                {{ align }}
            </Col>
            </Row>
        </Container>
    `,
});
