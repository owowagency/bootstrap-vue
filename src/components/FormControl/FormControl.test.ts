import FormControl from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(FormControl);

    it('adds disabled property', () => {
        const wrapper = shallowMount(FormControl, {
            props: {disabled: true},
        });

        expect((wrapper.element as HTMLInputElement).disabled).toBe(true);
    });

    it('adds placeholder property', () => {
        const wrapper = shallowMount(FormControl, {
            props: {placeholder: 'I am a placeholder'},
        });

        expect(wrapper.attributes('placeholder')).toBe('I am a placeholder');
    });

    it('adds readonly property', () => {
        const wrapper = shallowMount(FormControl, {
            props: {readonly: true},
        });

        expect((wrapper.element as HTMLInputElement).readOnly).toBe(true);
    });

    componentWrapperClassTest(FormControl, {disabled: true}, 'disabled');

    componentWrapperClassTest(FormControl, {plainText: true}, 'form-control-plaintext');

    componentWrapperClassTest(FormControl, {readonly: true}, 'readonly');

    componentWrapperClassTest(FormControl, {size: 'lg'}, 'form-control-lg');
});
