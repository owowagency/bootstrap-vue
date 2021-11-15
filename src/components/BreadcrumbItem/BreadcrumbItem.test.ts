import BreadcrumbItem from '.';

describe('template', () => {
    componentRenderTest(BreadcrumbItem);

    componentSlotRenderTest(BreadcrumbItem);

    componentWrapperClassTest(BreadcrumbItem, {active: true}, 'active');
});
