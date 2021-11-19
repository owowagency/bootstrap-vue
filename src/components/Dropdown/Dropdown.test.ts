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

    it('emits event on click dropdown menu item', async() => {
        const wrapper = shallowMount(DropdownMenu);

        wrapper.findComponent(DropdownMenu).vm.$emit('click:item', items[0]);

        expect(wrapper.emitted('click:item')[0]).toEqual([items[0]]);
    });
});
