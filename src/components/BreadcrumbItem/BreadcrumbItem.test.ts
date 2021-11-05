import BreadcrumbItem from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(BreadcrumbItem);

    componentSlotRenderTest(BreadcrumbItem);

    componentWrapperClassTest(BreadcrumbItem, {active: true}, 'active');
});
