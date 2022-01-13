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

    componentRenderTest(
        FormDropdown,
        {props: {searchable: true}},
        false,
        'renders input',
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

describe('filteredItems', () => {
    it('does not filter items without search', () => {
        const wrapper = shallowMount(FormDropdown, {props: {items}});

        expect(wrapper.vm.filteredItems).toEqual(items);
    });

    it('does not filter items with search but searchItems disabled', () => {
        const wrapper = shallowMount(
            FormDropdown,
            {
                props: {
                    autoSearch: false,
                    items,
                    search: 'item 1',
                },
            },
        );

        expect(wrapper.vm.filteredItems).toEqual(items);
    });

    it('filters items with search', () => {
        const wrapper = shallowMount(
            FormDropdown,
            {
                props: {
                    items,
                    search: 'item 1',
                },
            },
        );

        expect(wrapper.vm.filteredItems).toEqual([{label: 'Item 1'}]);
    });
});

describe('search', () => {
    it('emits on change', async() => {
        const wrapper = mount(
            FormDropdown,
            {
                props: {
                    modelValue: items[0],
                    searchable: true,
                },
            },
        );

        await wrapper.find('input').setValue('changed');

        expect(wrapper.emitted('update:modelValue')[0]).toEqual([undefined]);

        expect(wrapper.emitted('update:search')[0]).toEqual(['changed']);
    });

    it('does not emit when no search', async() => {
        // TODO: unable to test since changing `search` on `wrapper.vm`
        // does not trigger the watchers. Setting `search` to `false` will not
        // render the input which is used as an alternative to change the value
        // of `search`.
    });

    it('does not emit update:modelValue when modelValue is undefined', async() => {
        const wrapper = mount(
            FormDropdown,
            {
                props: {
                    modelValue: undefined,
                    searchable: true,
                },
            },
        );

        await wrapper.find('input').setValue('changed');

        expect(wrapper.emitted('update:modelValue')).toBeFalsy();

        expect(wrapper.emitted('update:search')[0]).toEqual(['changed']);
    });

    it('does not emit update:search and update:modelValue when modelValue is set with the same label value as the search', async() => {
        const wrapper = mount(
            FormDropdown,
            {
                props: {
                    modelValue: items[0],
                    searchable: true,
                },
            },
        );

        await wrapper.find('input').setValue(items[0].label);

        expect(wrapper.emitted('update:modelValue')).toBeFalsy();

        expect(wrapper.emitted('update:search')).toBeFalsy();
    });
});
