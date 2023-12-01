import ListGroupItem from '.';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(ListGroupItem);

    componentSlotRenderTest(ListGroupItem);

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

    componentWrapperTagTest(ListGroupItem, {props: {tag: 'table'}});
});
