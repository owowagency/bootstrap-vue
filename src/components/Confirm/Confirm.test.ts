import {describe, expect, it} from 'vitest';
import Confirm from '.';
import {mount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(
        Confirm,
        // Force an id to prevent snapshots from failing because of uuid.
        {props: {id: 'dont-change-please'}},
        false,
    );

    componentSlotRenderTest(Confirm);

    componentSlotRenderTest(Confirm, 'buttonCancel', {shallow: false});

    componentSlotRenderTest(Confirm, 'buttonOk', {shallow: false});

    const emits = [
        {el: '.button-cancel', emit: 'cancelled'},
        {el: '.button-ok', emit: 'confirmed'},
    ];

    for (const {el, emit} of emits) {
        it(`emits '${emit}' when ${el} is clicked`, async() => {
            const wrapper = await mount(Confirm);

            await wrapper.find(el).trigger('click');

            expect(wrapper.emitted()[emit]).toHaveLength(1);
        });
    }
});
