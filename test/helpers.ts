import {mount, shallowMount} from '@vue/test-utils';

export const componentBootstrapEventTest = (component: any, target: string, eventType: string, componentType: string) => {
    const eventName = `${eventType}.bs.${componentType}`;

    it(`triggers ${eventType} emit after triggering ${eventName} event`, () => {
        const wrapper = shallowMount(component);

        const event = new Event(eventName);

        wrapper.find(target).element.dispatchEvent(event);

        expect(wrapper.emitted(eventType)).toBeTruthy();
    });
};

global.componentBootstrapEventTest = componentBootstrapEventTest;

export const componentRenderTest = (component: any, options = {}, shallow = true, testName = 'renders default') => {
    it(testName, () => {
        const mounter = shallow ? shallowMount : mount;

        const wrapper = mounter(component, options);

        expect(wrapper.html()).toMatchSnapshot();
    });
};

global.componentRenderTest = componentRenderTest;

export const componentSlotRenderTest = (component: any, slot = 'default', options = {}) => {
    it(`renders ${slot} slot`, () => {
        const id = `i-am-the-${slot}-slot`;

        const wrapper = mount(component, {
            global: {
                renderStubDefaultSlot: true,
            },
            slots: {[slot]: `<div id="${id}" />`},
            shallow: true,
            ...options,
        });

        expect(wrapper.find(`#${id}`).exists()).toBe(true);
    });
};

global.componentSlotRenderTest = componentSlotRenderTest;

export const componentWrapperAttributeTest = (component: any, props = {}, attributeName: string, expectedValue?: string) => {
    const testSuffix = expectedValue ? `with value ${expectedValue}` : '';

    it(`adds ${attributeName} attribute to the wrapper ${testSuffix}`, () => {
        const wrapper = shallowMount(component, {props});

        expect(wrapper.attributes()).toHaveProperty(attributeName);

        if (expectedValue) {
            expect(wrapper.attributes(attributeName)).toBe(expectedValue);
        }
    });
};

global.componentWrapperAttributeTest = componentWrapperAttributeTest;

export const componentWrapperClassTest = (component: any, props = {}, classname: string, testName?: string) => {
    it(testName || `adds ${classname} class to the wrapper`, () => {
        const wrapper = shallowMount(component, {props});

        expect(wrapper.classes()).toContain(classname);
    });
};

global.componentWrapperClassTest = componentWrapperClassTest;

export const componentWrapperTagTest = (component: any, options: Record<string, any>) => {
    const tag = options.props?.tag || 'div';

    it(`wrapper has ${tag} as tag`, () => {
        const wrapper = shallowMount(component, options);

        expect((wrapper.element as HTMLElement).tagName).toBe(tag.toLocaleUpperCase());
    });
};

global.componentWrapperTagTest = componentWrapperTagTest;
