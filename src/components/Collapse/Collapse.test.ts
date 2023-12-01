import {describe, expect, it, vi} from 'vitest';
import Collapse from '.';
import {shallowMount} from '@vue/test-utils';

vi.mock('bootstrap', () => ({
    Collapse: {
        getOrCreateInstance: vi.fn(),
    },
    __v_isShallow: true,
}));

describe('template', () => {
    componentRenderTest(Collapse, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(Collapse, 'toggle');

    componentSlotRenderTest(Collapse, 'toggleContent');

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

        expect((await import('bootstrap')).Collapse.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.collapse, {toggle: false});

        // TODO: Unable to assert bsCollapse value.
    });

    it('sets bsCollapse with toggle', async() => {
        const wrapper = await shallowMount(Collapse, {
            props: {visible: true},
        });

        expect((await import('bootstrap')).Collapse.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.collapse, {toggle: true});
    });
});
