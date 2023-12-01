import NavLink from '.';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(NavLink);

    componentSlotRenderTest(NavLink);

    componentWrapperClassTest(NavLink, {active: true}, 'active');

    componentWrapperClassTest(NavLink, {disabled: true}, 'disabled');
});
