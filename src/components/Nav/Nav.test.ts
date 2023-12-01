import Nav from '.';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(Nav);

    componentSlotRenderTest(Nav);

    componentWrapperClassTest(Nav, {fill: true}, 'nav-fill');

    componentWrapperClassTest(Nav, {justified: true}, 'nav-justified');

    componentWrapperClassTest(Nav, {pills: true}, 'nav-pills');

    componentWrapperClassTest(Nav, {tabs: true}, 'nav-tabs');

    componentWrapperClassTest(Nav, {vertical: true}, 'flex-column');
});
