import Col from '../Col';
import Container from '.';
import Row from '../Row';

export default {
    title: 'Layout/Container',
    component: Container,
};

const template = (args) => ({
    components: {Col, Container, Row},
    setup: () => ({args}),
    template: `
        <Container v-bind="args">
            <Row>
                <Col
                    v-for="i in 12"
                    class="border bg-light"
                >
                    {{ i }}
                </Col>
            </Row>
        </Container>
    `,
});

export const Default = template.bind({});

export const Fluid = template.bind({});

Fluid.args = {
    fluid: true,
};
