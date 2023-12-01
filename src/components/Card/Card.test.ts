import {describe, expect, it} from 'vitest';
import Card from '.';
import {shallowMount} from '@vue/test-utils';

const textPropTest = (propName: string) => {
    it(`renders ${propName}`, () => {
        const text = `I am a ${propName}`;

        const wrapper = shallowMount(Card, {
            props: {[propName]: text},
        });

        expect(wrapper.find(`.card-${propName}`).text()).toBe(text);
    });
};

describe('template', () => {
    componentRenderTest(Card);

    componentSlotRenderTest(Card, 'header');

    componentSlotRenderTest(Card);

    componentSlotRenderTest(Card, 'footer');

    ['footer', 'header', 'subtitle', 'text', 'title'].forEach(textPropTest);

    it('does not add body class', () => {
        const wrapper = shallowMount(Card, {
            props: {noBody: true},
        });

        expect(wrapper.find('.card-body').exists()).toBe(false);
    });
});
