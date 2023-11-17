import DropdownMenuItem from '@/components/DropdownMenuItem';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentSlotRenderTest(DropdownMenuItem);

    componentSlotRenderTest(
        DropdownMenuItem,
        'default',
        {props: {header: true}},
    );

    componentRenderTest(
        DropdownMenuItem,
        {props: {label: 'Hello'}},
        true,
        'renders label',
    );

    componentRenderTest(
        DropdownMenuItem,
        {props: {active: true, label: 'there'}},
        true,
        'renders active',
    );

    componentRenderTest(
        DropdownMenuItem,
        {props: {divider: true}},
        true,
        'renders divider',
    );

    componentRenderTest(
        DropdownMenuItem,
        {props: {header: true, label: 'general kenobi'}},
        true,
        'renders header',
    );

    it('adds item class to link', () => {
        const wrapper = shallowMount(DropdownMenuItem, {
            props: {
                itemClass: ['hello-there'],
            },
        });

        expect(wrapper.find('a').classes()).toContain('hello-there');
    });
});
