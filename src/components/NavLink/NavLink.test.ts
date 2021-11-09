import NavLink from '.';

describe('template', () => {
    componentRenderTest(NavLink);

    componentSlotRenderTest(NavLink);

    componentWrapperClassTest(NavLink, {active: true}, 'active');

    componentWrapperClassTest(NavLink, {disabled: true}, 'disabled');
});
