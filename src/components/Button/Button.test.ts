import {describe, expect, it} from 'vitest';
import Button from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(Button);

    componentRenderTest(Button, {props: {href: 'https://github.com/owowagency/bootstrap-vue'}});

    componentRenderTest(Button, {props: {is: 'div'}});

    componentRenderTest(Button, {props: {to: {name: 'home'}}});

    componentSlotRenderTest(Button);

    it('adds disabled property', () => {
        const wrapper = shallowMount(Button, {
            props: {disabled: true},
        });

        expect((wrapper.element as HTMLButtonElement).disabled).toBe(true);
    });

    componentWrapperClassTest(Button, {outline: true}, 'btn-outline-primary');

    componentWrapperClassTest(Button, {size: 'lg'}, 'btn-lg');

    componentWrapperClassTest(Button, {variant: 'danger'}, 'btn-danger');
});
