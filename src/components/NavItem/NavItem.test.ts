import NavItem from '.';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(NavItem);

    componentSlotRenderTest(NavItem);
});
