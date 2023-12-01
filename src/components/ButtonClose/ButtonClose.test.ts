import {describe, expect, it} from 'vitest'
import ButtonClose from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(ButtonClose);

    it('adds disabled property', () => {
        const wrapper = shallowMount(ButtonClose, {
            props: {disabled: true},
        });

        expect((wrapper.element as HTMLButtonElement).disabled).toBe(true);
    });
});
