import ListGroup from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(ListGroup);

    componentSlotRenderTest(ListGroup);

    componentWrapperClassTest(ListGroup, {flush: true}, 'list-group-flush');

    componentWrapperClassTest(ListGroup, {horizontal: true}, 'list-group-horizontal');

    componentWrapperClassTest(ListGroup, {numbered: true}, 'list-group-numbered');

    componentWrapperTagTest(ListGroup, {props: {tag: 'ul', numbered: false}});

    componentWrapperTagTest(ListGroup, {props: {tag: 'ol', numbered: true}});
});


