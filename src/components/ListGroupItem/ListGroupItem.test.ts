import ListGroupItem from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(ListGroupItem);

    componentWrapperClassTest(
        ListGroupItem,
        {tag: 'a'},
        'list-group-item-action',
        'adds list-group-item-class when tag is a',
    );

    componentWrapperClassTest(
        ListGroupItem,
        {tag: 'button'},
        'list-group-item-action',
        'adds list-group-item-class when tag is button',
    );

    componentWrapperClassTest(ListGroupItem, {active: true}, 'active');

    componentWrapperClassTest(ListGroupItem, {variant: 'danger'}, 'list-group-item-danger');

    it('uses given tag', () => {
        const wrapper = shallowMount(ListGroupItem, {
            props: {tag: 'table'},
        });

        expect((wrapper.element as HTMLElement).tagName).toBe('TABLE');
    });
});
