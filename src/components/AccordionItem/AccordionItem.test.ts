import AccordionItem from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(AccordionItem, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(AccordionItem);

    componentSlotRenderTest(AccordionItem, 'header');

    it('renders header', () => {
        const wrapper = shallowMount(AccordionItem, {
            props: {
                id: 'owow-accordion-item',
                header: 'find-me',
                headerTag: 'h5',
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders given custom classes', () => {
        const wrapper = shallowMount(AccordionItem, {
            props: {
                id: 'owow-accordion-item',
                bodyClass: 'body-class',
                buttonClass: 'button-class',
                collapseClass: 'collapse-class',
                class: 'custom-class',
                headerClass: 'header-class',
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('adds parent id to collapse', () => {
        const wrapper = shallowMount(AccordionItem, {
            props: {parentId: 'i-am-your-father'},
        });

        expect(wrapper.find('.accordion-collapse').attributes('data-bs-parent')).toBe('#i-am-your-father');
    });
});
