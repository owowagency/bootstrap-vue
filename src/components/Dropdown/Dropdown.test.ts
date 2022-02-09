import Dropdown from '.';
import DropdownMenu from '@/components/DropdownMenu';
import {shallowMount} from '@vue/test-utils';

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
});
