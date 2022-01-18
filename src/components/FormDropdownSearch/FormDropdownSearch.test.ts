import {mount, shallowMount} from '@vue/test-utils';
import {nextTick, ref} from 'vue';
import FormControl from '@/components/FormControl';
import FormDropdownSearch from '.';

const items = [
    {label: 'Item 1'},
    {label: 'Item 2'},
    {label: 'Item 3'},
];

describe('template', () => {
    componentRenderTest(FormDropdownSearch, {props: {items}}, false);

    componentSlotRenderTest(FormDropdownSearch, 'dropdownToggle', {shallow: false});

    it('calls onFocus when focussing on FormControl', () => {
        const wrapper = mount(FormDropdownSearch, {
            global: {
                mocks: {
                    onFocus: jest.fn(),
                },
            },
        });

        wrapper.findComponent(FormControl).trigger('focus');

        expect(wrapper.vm.onFocus).toBeCalled();
    });
});

describe('filteredItems', () => {
    it('filters items when it has a searchValue and autoSearch is enabled', () => {
        const wrapper = shallowMount(FormDropdownSearch, {props: {items}});

        wrapper.vm.searchValue = '1';

        expect(wrapper.vm.filteredItems).toEqual([items[0]]);
    });

    it('does not filter items when it does not have a searchValue and autoSearch is enabled', () => {
        const wrapper = shallowMount(FormDropdownSearch, {props: {items}});

        wrapper.vm.searchValue = '';

        expect(wrapper.vm.filteredItems).toEqual(items);
    });

    it('does not filter items when it has a searchValue and autoSearch is disabled', () => {
        const wrapper = shallowMount(
            FormDropdownSearch,
            {
                props: {
                    autoSearch: false,
                    items,
                },
            },
        );

        wrapper.vm.searchValue = '1';

        expect(wrapper.vm.filteredItems).toEqual(items);
    });
});

describe('modelValue', () => {
    it('sets searchValueCached to its label', async() => {
        const modelValue = ref();

        const wrapper = shallowMount(FormDropdownSearch, {props: {modelValue}});

        modelValue.value = items[0];

        await nextTick();

        expect(wrapper.vm.searchValueCached).toBe(items[0].label);
    });
});

describe('search', () => {
    it('sets searchValue on change', async() => {
        const search = ref();

        const wrapper = shallowMount(FormDropdownSearch, {props: {search}});

        search.value = 'changed';

        await nextTick();

        expect(wrapper.vm.searchValue).toBe(search.value);
    });
});

describe('searchValue', () => {
    it('emits update:search on change', async() => {
        const wrapper = shallowMount(FormDropdownSearch);

        wrapper.vm.searchValue = 'changed';

        await nextTick();

        expect(wrapper.emitted('update:search')).toEqual([['changed']]);
    });
});

describe('searchValueDisplayed', () => {
    it('is equal to searchValueCached when it has a value', () => {
        const wrapper = shallowMount(FormDropdownSearch);

        wrapper.vm.searchValue = 'do not display me';

        wrapper.vm.searchValueCached = 'display me';

        expect(wrapper.vm.searchValueDisplayed).toEqual('display me');
    });

    it('is equal to searchValue when searchValueCached does not have a value', () => {
        const wrapper = shallowMount(FormDropdownSearch);

        wrapper.vm.searchValue = 'display me';

        wrapper.vm.searchValueCached = '';

        expect(wrapper.vm.searchValueDisplayed).toEqual('display me');
    });

    it('resets searchValueCached, and model value and it sets searchValue', () => {
        const wrapper = shallowMount(FormDropdownSearch);

        wrapper.vm.modelValue = items[0];

        wrapper.vm.searchValueCached = 'reset me';

        wrapper.vm.searchValueDisplayed = 'changed';

        expect(wrapper.vm.modelValue).toBeUndefined();

        expect(wrapper.vm.searchValueCached).toBe('');
    });
});


describe('searchValue', () => {
    it('is equal to modelValue labelKey when modelValue is set', () => {
        const wrapper = shallowMount(FormDropdownSearch, {props: {modelValue: items[0]}});

        expect(wrapper.vm.searchValue).toBe(items[0].label);
    });

    it('is equal to search when modelValue is not set', () => {
        const wrapper = shallowMount(FormDropdownSearch, {props: {search: 'value'}});

        expect(wrapper.vm.searchValue).toBe('value');
    });

    it('calls showMenu', () => {
        // TODO: unable to test showMenu being called.
    });
});

describe('showMenu', () => {
    it('it calls show on bsDropdown', async() => {
        // TODO: Currently not able to test.
    });
});

describe('onFocus', () => {
    it('selects the value of the input', () => {
        const wrapper = mount(FormDropdownSearch);

        const mockSelect = jest.fn();

        wrapper.vm.formControl.input.select = mockSelect;

        wrapper.vm.onFocus();

        expect(mockSelect).toBeCalled();
    });

    it('sets searchValueCached to searchValue when searchValueCached does not have a value', () => {
        const wrapper = mount(FormDropdownSearch);

        wrapper.vm.searchValueCached = '';

        wrapper.vm.searchValue = 'copy me';

        wrapper.vm.onFocus();

        expect(wrapper.vm.searchValueCached).toBe('copy me');
    });

    it('does not set searchValueCached to searchValue when searchValueCached has a value', () => {
        const wrapper = mount(FormDropdownSearch);

        wrapper.vm.searchValueCached = 'hello';

        wrapper.vm.searchValue = 'do not copy me';

        wrapper.vm.onFocus();

        expect(wrapper.vm.searchValueCached).toBe('hello');
    });

    it('resets searchValue', () => {
        const wrapper = mount(FormDropdownSearch);

        wrapper.vm.searchValue = 'copy me';

        wrapper.vm.onFocus();

        expect(wrapper.vm.searchValue).toBe('');
    });

    it('calls showMenu', () => {
        // TODO: unable to test showMenu being called.
    });
});
