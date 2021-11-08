import FormCheck from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(FormCheck, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentRenderTest(
        FormCheck,
        // Force an id to prevent snapshots from failing because of uuid.
        {props: {
            id: 'dont-change-please',
            label: 'I am a label',
        }},
        true,
        'renders label',
    );
});
