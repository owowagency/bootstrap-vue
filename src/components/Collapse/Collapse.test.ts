import Collapse from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(Collapse, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(Collapse);

    it('emits event on click collapse toggle', async() => {
        const wrapper = shallowMount(Collapse);

        await wrapper.find('[data-bs-toggle="collapse"]').trigger('click');

        expect(wrapper.emitted('click:toggle')).toBeTruthy();
    });
});
