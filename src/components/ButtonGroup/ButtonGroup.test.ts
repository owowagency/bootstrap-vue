import ButtonGroup from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(ButtonGroup);

    componentSlotRenderTest(ButtonGroup);

    componentWrapperClassTest(ButtonGroup, {vertical: true}, 'btn-group-vertical');

    componentWrapperClassTest(ButtonGroup, {size: 'lg'}, 'btn-group-lg');
});
