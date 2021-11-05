import Dropdown from '.';
import DropdownMenu from '../DropdownMenu';
import {shallowMount} from '@vue/test-utils';

const items = [
    {label: 'Item 1'},
    {label: 'Item 2'},
    {label: 'Item 3'},
];

describe('template', () => {
    componentRenderTest(Dropdown, {props: {items}});

    componentSlotRenderTest(Dropdown);

    it('emits event on click dropdown menu item', async () => {
        const wrapper = shallowMount(DropdownMenu);

        wrapper.findComponent(DropdownMenu).vm.$emit('click:item', items[0]);

        expect(wrapper.emitted('click:item')[0]).toEqual([items[0]]);
    });
});
