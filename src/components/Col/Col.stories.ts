import Col from '.';
import Container from '@/components/Container';
import Row from '@/components/Row';
import {breakpoints} from '@/composables/useBreakpoints';

const colArg = {control: {type: 'number'}};

export default {
    title: 'Layout/Col',
    component: Col,
    argTypes: {
        cols: colArg,
        ...Object.fromEntries(breakpoints.map(b => [b, colArg])),
        offset: colArg,
        ...Object.fromEntries(breakpoints.map(b => [`offset-${b}`, colArg])),
        order: colArg,
        ...Object.fromEntries(breakpoints.map(b => [`order-${b}`, colArg])),
    },
};

export const Default = (args) => ({
    components: {Col, Container, Row},
    setup: () => ({args}),
    template: `
        <Container>
            <Row
                class="p-3 border"
            >
                <Col
                    class="border bg-light"
                    v-bind="args"
                >
                    I am a column
                </Col>
            </Row>
        </Container>
    `,
});
