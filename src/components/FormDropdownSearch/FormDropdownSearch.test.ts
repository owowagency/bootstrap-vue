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

    componentSlotRenderTest(FormDropdownSearch, 'noOptions', {shallow: false});

    componentSlotRenderTest(FormDropdownSearch, 'prepend', {shallow: false});

    componentSlotRenderTest(FormDropdownSearch, 'items', {shallow: false});

    componentSlotRenderTest(FormDropdownSearch, 'item', {
        props: {items},
        shallow: false,
    });

    componentSlotRenderTest(FormDropdownSearch, 'append', {shallow: false});

    it('calls showMenu when focussing on FormControl', () => {
        const wrapper = mount(FormDropdownSearch, {
            global: {
                mocks: {
                    showMenu: jest.fn(),
                },
            },
        });

        wrapper.findComponent(FormControl).trigger('focus');

        expect(wrapper.vm.showMenu).toBeCalled();
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
    it('sets searchValue to its label', async() => {
        let modelValue = undefined;

        const wrapper = shallowMount(FormDropdownSearch, {props: {modelValue}});

        wrapper.setProps({modelValue: items[0]});

        await nextTick();

        expect(wrapper.vm.searchValue).toBe(items[0].label);
    });

    it('resets searchValue if undefined', async() => {
        let modelValue = items[0];

        const wrapper = shallowMount(FormDropdownSearch, {props: {
            modelValue,
        }});

        expect(wrapper.vm.searchValue).toBe(items[0].label);

        wrapper.setProps({modelValue: undefined});

        await nextTick();

        expect(wrapper.vm.searchValue).toBe('');
    });
});

describe('search', () => {
    it('sets searchValue on change', async() => {
        const search = undefined;

        const wrapper = shallowMount(FormDropdownSearch, {props: {search}});

        wrapper.setProps({search: 'changed'});

        await nextTick();

        expect(wrapper.vm.searchValue).toBe('changed');
    });
});

describe('searchValue', () => {
    it('is equal to modelValueLabel by default', async() => {
        const modelValue = items[0];

        const wrapper = shallowMount(FormDropdownSearch, {props: {modelValue}});

        expect(wrapper.vm.searchValue).toBe(items[0].label);
    });

    it('is equal to search by default when there is no modelValueLabel', async() => {
        const modelValue = ref();

        const wrapper = shallowMount(FormDropdownSearch, {props: {
            modelValue,
            search: 'test',
        }});

        expect(wrapper.vm.searchValue).toBe('test');
    });
});

describe('searchValueDisplayed', () => {
    it('is empty when searchValueCached has a value', () => {
        const wrapper = shallowMount(FormDropdownSearch);

        wrapper.vm.searchValueCached = 'I am not empty';

        wrapper.vm.searchValue = 'do not display me';

        expect(wrapper.vm.searchValueDisplayed).toEqual('');
    });

    it('is equal to searchValue when searchValueCached does not have a value', () => {
        const wrapper = shallowMount(FormDropdownSearch);

        wrapper.vm.searchValueCached = '';

        wrapper.vm.searchValue = 'display me';

        expect(wrapper.vm.searchValueDisplayed).toEqual('display me');
    });

    it('sets search value and emits', () => {
        const wrapper = shallowMount(FormDropdownSearch);

        wrapper.vm.searchValueDisplayed = 'new search value';

        expect(wrapper.vm.searchValue).toEqual('new search value');

        expect(wrapper.emitted('update:search')).toEqual([['new search value']]);
    });
});

describe('onMounted', () => {
    describe('listening to shown.bs.dropdown', () => {
        it('focusses on dropdownToggle', () => {
            // TODO: currently unable to create a test for this.
        });

        it('sets searchValueCached to modelValueLabel', () => {
            const modelValue = items[0];

            const wrapper = mount(FormDropdownSearch, {props: {modelValue}});

            const event = new Event('shown.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.vm.searchValueCached).toBe(items[0].label);
        });

        it('does not set searchValueCached to modelValueLabel when empty', () => {
            const wrapper = mount(FormDropdownSearch);

            wrapper.vm.searchValueCached = 'do not change me';

            const event = new Event('shown.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.vm.searchValueCached).toBe('do not change me');
        });

        it('empties searchValue', () => {
            const wrapper = mount(FormDropdownSearch);

            wrapper.vm.searchValue = 'not empty';

            const event = new Event('shown.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.vm.searchValue).toBe('');
        });

        it('emits searchValue when search is not empty', () => {
            const wrapper = mount(FormDropdownSearch, {props: {search: 'not empty'}});

            const event = new Event('shown.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.emitted('update:search')).toEqual([['']]);
        });

        it('does not emit searchValue when search is empty', () => {
            const wrapper = mount(FormDropdownSearch, {props: {search: ''}});

            const event = new Event('shown.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.emitted('update:search')).toBeUndefined();
        });
    });

    describe('listening to hidden.bs.dropdown', () => {
        it('blurs on dropdownToggle', () => {
            // TODO: currently unable to create a test for this.
        });

        it('empties searchValue when there is no modelValue', () => {
            const wrapper = mount(FormDropdownSearch);

            wrapper.vm.searchValue = 'not empty';

            const event = new Event('hidden.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.vm.searchValue).toBe('');
        });

        it('sets searchValue to modelValueLabel', () => {
            const modelValue = items[0];

            const wrapper = mount(FormDropdownSearch, {props: {modelValue}});

            wrapper.vm.searchValue = 'something';

            expect(wrapper.vm.searchValue).toBe('something');

            const event = new Event('hidden.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.vm.searchValue).toBe(items[0].label);
        });

        it('empties searchValueCached', () => {
            const wrapper = mount(FormDropdownSearch);

            wrapper.vm.searchValueCached = 'not empty';

            const event = new Event('hidden.bs.dropdown');

            wrapper.find('[data-bs-toggle="dropdown"]').element.dispatchEvent(event);

            expect(wrapper.vm.searchValueCached).toBe('');
        });
    });
});
