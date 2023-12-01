import {describe, expect, it} from 'vitest';
import InputGroup from '.';
import {shallowMount} from '@vue/test-utils';

const textPropTest = (propName: string) => {
    it(`renders ${propName}`, () => {
        const text = `${propName} me`;

        const wrapper = shallowMount(InputGroup, {
            props: {[propName]: text},
        });

        expect(wrapper.find('.input-group-text').text()).toBe(text);
    });
};

describe('template', () => {
    componentRenderTest(InputGroup);

    componentWrapperClassTest(InputGroup, {size: 'lg'}, 'input-group-lg');

    componentSlotRenderTest(InputGroup, 'append');

    componentSlotRenderTest(InputGroup);

    componentSlotRenderTest(InputGroup, 'prepend');

    ['append', 'prepend'].forEach(textPropTest);
});
