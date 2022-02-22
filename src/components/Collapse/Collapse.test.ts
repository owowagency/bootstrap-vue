import Collapse from '.';
import {shallowMount} from '@vue/test-utils';

jest.mock('bootstrap', () => ({
    Collapse: {
        getOrCreateInstance: jest.fn(),
    },
}));

describe('template', () => {
    componentRenderTest(Collapse, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(Collapse);

    ['show', 'shown', 'hide', 'hidden'].forEach((event: string) => {
        componentBootstrapEventTest(
            Collapse,
            '.collapse',
            event,
            'collapse',
        );
    });
});

describe('onMounted', () => {
    it('sets bsCollapse', async() => {
        const wrapper = await shallowMount(Collapse);

        expect((await import('bootstrap')).Collapse.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.collapse);

        // TODO: Unable to assert bsCollapse value.
    });
});
