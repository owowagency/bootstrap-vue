import ButtonState from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(ButtonState);

    componentSlotRenderTest(ButtonState);
});

describe('disabled', () => {
    it('is false when loading', () => {
        const wrapper = shallowMount(ButtonState, {props: {loading: false}});

        expect(wrapper.vm.disabled).toBe(false);
    });

    it('is true when loading', () => {
        const wrapper = shallowMount(ButtonState, {props: {loading: true}});

        expect(wrapper.vm.disabled).toBe(true);
    });
});

describe('variant', () => {
    it('is variant prop by default', () => {
        const wrapper = shallowMount(ButtonState, {props: {variant: 'info'}});

        expect(wrapper.vm.variant).toBe('info');
    });

    it('is successVariant prop when success', () => {
        const wrapper = shallowMount(ButtonState, {
            props: {
                success: true,
                successVariant: 'info',
            },
        });

        expect(wrapper.vm.variant).toBe('info');
    });

    it('is errorVariant prop when error', () => {
        const wrapper = shallowMount(ButtonState, {
            props: {
                error: true,
                errorVariant: 'info',
            },
        });

        expect(wrapper.vm.variant).toBe('info');
    });
});
