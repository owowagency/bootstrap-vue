import Accordion from '.';

describe('template', () => {
    componentRenderTest(Accordion, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(Accordion);

    // TODO: Currently unable to test if the slot receives the `parent-id` prop.

    componentWrapperClassTest(Accordion, {flush: true}, 'accordion-flush');
});
