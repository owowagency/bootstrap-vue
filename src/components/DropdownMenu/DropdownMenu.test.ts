import {describe, expect, it} from 'vitest'
import DropdownMenu from '@/components/DropdownMenu';
import DropdownMenuItem from '@/components/DropdownMenuItem';
import {shallowMount} from '@vue/test-utils';

const items = [
    {header: true, label: 'Item 1'},
    {label: 'Item 3'},
    {divider: true},
    {label: 'Item 4', active: true},
];

describe('template', () => {
    componentRenderTest(DropdownMenu, {props: {items}});

    componentSlotRenderTest(DropdownMenu, 'prepend');

    componentSlotRenderTest(DropdownMenu, 'items');

    componentSlotRenderTest(DropdownMenu, 'item', {props: {items}});

    componentSlotRenderTest(DropdownMenu, 'append');

    it('emits event on click dropdown menu item', async() => {
        const wrapper = shallowMount(DropdownMenu, {props: {items}});

        await wrapper.findComponent(DropdownMenuItem).trigger('click');

        expect(wrapper.emitted('click:item')[0]).toEqual([items[0]]);
    });

    it('forwards item class to DropdownMenuItem', () => {
        const wrapper = shallowMount(DropdownMenu, {
            props: {
                itemClass: 'hello-there',
                items,
            },
        });

        const dropdownMenuItem = wrapper.findComponent(DropdownMenuItem);

        expect(dropdownMenuItem.vm.itemClass).toBe('hello-there');
    });
});
