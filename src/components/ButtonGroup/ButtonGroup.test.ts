import ButtonGroup from '.';
import {describe} from 'vitest'

describe('template', () => {
    componentRenderTest(ButtonGroup);

    componentSlotRenderTest(ButtonGroup);

    componentWrapperClassTest(ButtonGroup, {vertical: true}, 'btn-group-vertical');

    componentWrapperClassTest(ButtonGroup, {size: 'lg'}, 'btn-group-lg');
});
