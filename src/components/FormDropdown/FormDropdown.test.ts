import {mount, shallowMount} from '@vue/test-utils';
import Dropdown from '@/components/Dropdown';
import FormDropdown from '.';

const items = [
    {label: 'Item 1'},
    {label: 'Item 2'},
    {label: 'Item 3'},
];

describe('template', () => {
    componentRenderTest(FormDropdown, {props: {items}}, false);

    componentRenderTest(
        FormDropdown,
        {props: {items: []}},
        false,
        'renders no options',
    );

    componentSlotRenderTest(FormDropdown, 'menuPrepend', {shallow: false});

    componentSlotRenderTest(FormDropdown, 'menuAppend', {shallow: false});

    componentSlotRenderTest(
        FormDropdown,
        'noOptions',
        {
            shallow: false,
            props: {items: []},
        },
    );

    it('emits update:modelValue on click item', () => {
        const wrapper = shallowMount(FormDropdown);

        wrapper.findComponent(Dropdown).vm.$emit('click:item', 'yooo');

        expect(wrapper.emitted('update:modelValue')[0]).toEqual(['yooo']);
    });

    it('adds disabled class to .form-select', () => {
        const wrapper = mount(FormDropdown, {props: {disabled: true}});

        const formSelect = wrapper.find('.form-select');

        expect(formSelect.classes()).toContain('disabled');
    });

    it('adds size class to .form-select', () => {
        const wrapper = mount(FormDropdown, {props: {size: 'lg'}});

        const formSelect = wrapper.find('.form-select');

        expect(formSelect.classes()).toContain('form-select-lg');
    });

    it('adds toggle class to .form-select', () => {
        const wrapper = mount(FormDropdown, {props: {toggleClass: 'is-invalid'}});

        const formSelect = wrapper.find('.form-select');

        expect(formSelect.classes()).toContain('is-invalid');
    });
});

describe('label', () => {
    it('uses placeholder when no modelValue', () => {
        const wrapper = shallowMount(FormDropdown, {
            props: {placeholder: 'I am a placeholder'},
        });

        expect(wrapper.vm.label).toBe('I am a placeholder');
    });

    it('uses labelKey of modelValue when modelValue is given', () => {
        const wrapper = shallowMount(FormDropdown, {
            props: {
                modelValue: {name: 'Dees Dohmen'},
                labelKey: 'name',
            },
        });

        expect(wrapper.vm.label).toBe('Dees Dohmen');
    });
});
