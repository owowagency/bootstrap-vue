import ButtonState from '.';
import Spinner from '@/components/Spinner';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(ButtonState);

    componentSlotRenderTest(ButtonState);

    it('renders spinner when loading', () => {
        const wrapper = shallowMount(ButtonState, {
            props: {loading: true},
            global: {renderStubDefaultSlot: true},
        });

        expect(wrapper.findComponent(Spinner).exists()).toBe(true);
    });

    it('renders success when success', () => {
        const wrapper = shallowMount(ButtonState, {
            props: {success: true},
            global: {renderStubDefaultSlot: true},
        });

        expect(wrapper.find('[data-test="success"]').exists()).toBe(true);
    });

    it('renders error when error', () => {
        const wrapper = shallowMount(ButtonState, {
            props: {error: true},
            global: {renderStubDefaultSlot: true},
        });

        expect(wrapper.find('[data-test="error"]').exists()).toBe(true);
    });
});

describe('disabled', () => {
    it('is false when not disabled', () => {
        const wrapper = shallowMount(ButtonState, {props: {disabled: false}});

        expect(wrapper.vm.disabled).toBe(false);
    });

    it('is true when disabled', () => {
        const wrapper = shallowMount(ButtonState, {props: {disabled: true}});

        expect(wrapper.vm.disabled).toBe(true);
    });

    it('is true when disabled and not loading', () => {
        const wrapper = shallowMount(ButtonState, {props: {disabled: true, loading: false}});

        expect(wrapper.vm.disabled).toBe(true);
    });

    it('is false when not loading', () => {
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
