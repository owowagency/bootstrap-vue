import Collapse from '.';

describe('template', () => {
    componentRenderTest(Collapse, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(Collapse);
});
