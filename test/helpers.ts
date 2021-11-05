import {mount, shallowMount} from '@vue/test-utils';

export const componentRenderTest = (component: any, options = {}, shallow = true, name = 'renders default') => {
    it(name, () => {
        const mounter = shallow ? shallowMount : mount;

        const wrapper = mounter(component, options);

        expect(wrapper.html()).toMatchSnapshot();
    });
};

global.componentRenderTest = componentRenderTest;

export const componentSlotRenderTest = (component: any, slot: string = 'default', options = {}) => {
    it(`renders ${slot} slot`, () => {
        const id = `i-am-the-${slot}-slot`;

        const wrapper = shallowMount(component, {
            global: {
                renderStubDefaultSlot: true,
            },
            slots: {[slot]: `<div id="${id}" />`},
            shallow: true,
        });
        
        expect(wrapper.find(`#${id}`).exists()).toBe(true);
    });
};

global.componentSlotRenderTest = componentSlotRenderTest;

export const componentWrapperClassTest = (component: any, props = {}, classname: string) => {
    it(`adds ${classname} class to the wrapper`, () => {
        const wrapper = shallowMount(component, {props});

        expect(wrapper.classes()).toContain(classname);
    });
};

global.componentWrapperClassTest = componentWrapperClassTest;
