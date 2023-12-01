import {describe, expect, it} from 'vitest';
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
        {
            props: {
                id: 'dont-change-please',
                label: 'I am a label',
            },
        },
        true,
        'renders label',
    );

    componentSlotRenderTest(FormCheck);

    it('renders radio input type', () => {
        const wrapper = shallowMount(FormCheck, {props: {type: 'radio'}});

        const input: HTMLInputElement = wrapper.find('input').element;

        expect(input.type).toBe('radio');
    });

    componentWrapperClassTest(FormCheck, {switch: true}, 'form-switch');

    componentWrapperClassTest(FormCheck, {inline: true}, 'form-check-inline');

    it('adds input class to input', () => {
        const wrapper = shallowMount(FormCheck, {props: {inputClass: 'is-invalid'}});

        const input = wrapper.find('input');

        expect(input.classes()).toContain('is-invalid');
    });

    it('emits on checked change', async() => {
        const wrapper = shallowMount(FormCheck);

        wrapper.find('input').setValue(true);

        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    });
});

describe('checked', () => {
    it('is false by default', () => {
        const wrapper = shallowMount(FormCheck);

        expect(wrapper.vm.checked).toBe(false);
    });

    it('is true when given', () => {
        const wrapper = shallowMount(FormCheck, {
            props: {modelValue: true},
        });

        expect(wrapper.vm.checked).toBe(true);
    });

    it('is equal to modelValue', () => {
        const wrapper = shallowMount(FormCheck, {
            props: {modelValue: 'b'},
        });

        expect(wrapper.vm.checked).toBe('b');
    });

    it('emit boolean when no value', () => {
        const wrapper = shallowMount(FormCheck);

        wrapper.vm.checked = true;

        expect(wrapper.emitted('update:modelValue')[0]).toStrictEqual([true]);

        wrapper.vm.checked = false;

        expect(wrapper.emitted('update:modelValue')[1]).toStrictEqual([false]);
    });

    it('emits value when given', () => {
        const wrapper = shallowMount(FormCheck, {
            props: {value: 'a'},
        });

        wrapper.vm.checked = true;

        expect(wrapper.emitted('update:modelValue')[0]).toStrictEqual(['a']);

        wrapper.vm.checked = false;

        expect(wrapper.emitted('update:modelValue')[1]).toStrictEqual([undefined]);
    });
});
