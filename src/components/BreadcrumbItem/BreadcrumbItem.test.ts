import BreadcrumbItem from '.';
import {describe} from 'vitest'

describe('template', () => {
    componentRenderTest(BreadcrumbItem);

    componentSlotRenderTest(BreadcrumbItem);

    componentWrapperClassTest(BreadcrumbItem, {active: true}, 'active');
});
