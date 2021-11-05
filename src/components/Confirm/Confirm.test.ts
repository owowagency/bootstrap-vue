import Confirm from '.';

describe('template', () => {
    componentRenderTest(
        Confirm,
        // Force an id to prevent snapshots from failing because of uuid.
        {props: {id: 'dont-change-please'}},
        false,
    );
});
