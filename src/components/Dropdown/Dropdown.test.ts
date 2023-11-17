import Button from '@/components/Button';
import Dropdown from '.';
import DropdownMenu from '@/components/DropdownMenu';
import {shallowMount} from '@vue/test-utils';

jest.mock('bootstrap', () => ({
    Dropdown: {
        getOrCreateInstance: jest.fn(),
    },
}));

const items = [
    {label: 'Item 1'},
    {label: 'Item 2'},
    {label: 'Item 3'},
];

describe('template', () => {
    componentRenderTest(Dropdown, {props: {items}});

    componentSlotRenderTest(Dropdown);

    componentSlotRenderTest(Dropdown, 'dropdownMenu', {shallow: false});

    componentSlotRenderTest(Dropdown, 'prepend', {shallow: false});

    componentSlotRenderTest(Dropdown, 'items', {shallow: false});

    componentSlotRenderTest(Dropdown, 'item', {
        props: {items},
        shallow: false,
    });

    componentSlotRenderTest(Dropdown, 'append', {shallow: false});

    ['show', 'shown', 'hide', 'hidden'].forEach((event: string) => {
        componentBootstrapEventTest(
            Dropdown,
            '.dropdown',
            event,
            'dropdown',
        );
    });

    it('adds menu class to DropdownMenu', () => {
        const wrapper = shallowMount(Dropdown, {
            props: {
                menuClass: 'hello-there',
                items,
            },
        });

        const dropdownMenu = wrapper.findComponent(DropdownMenu);

        expect(dropdownMenu.attributes('class')).toBe('hello-there');
    });

    it('adds toggle class to toggle', () => {
        const wrapper = shallowMount(Dropdown, {
            props: {
                toggleClass: 'hello-there',
                items,
            },
        });

        const dropdownMenu = wrapper.findComponent(Button);

        expect(dropdownMenu.classes()).toContain('hello-there');
    });

    it('forwards item class to DropdownMenu', () => {
        const wrapper = shallowMount(Dropdown, {
            props: {
                itemClass: 'hello-there',
                items,
            },
        });

        const dropdownMenu = wrapper.findComponent(DropdownMenu);

        expect(dropdownMenu.vm.itemClass).toBe('hello-there');
    });
});

describe('onMounted', () => {
    it('sets bsDropdown', async() => {
        const wrapper = await shallowMount(Dropdown);

        expect((await import('bootstrap')).Dropdown.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.dropdown, {});

        // TODO: Unable to assert bsDropdown value.
    });
});
