import Alert from '.';
import {shallowMount} from '@vue/test-utils';

jest.mock('bootstrap', () => ({
    Alert: {
        getOrCreateInstance: jest.fn(),
    },
}));


describe('template', () => {
    componentRenderTest(Alert);

    componentSlotRenderTest(Alert);

    componentWrapperClassTest(Alert, {variant: 'danger'}, 'alert-danger');
});

describe('onMounted', () => {
    it('sets bsAlert', async() => {
        const wrapper = await shallowMount(Alert);

        expect((await import('bootstrap')).Alert.getOrCreateInstance).toBeCalledWith(wrapper.vm.$refs.alert, {});

        // TODO: Unable to assert bsAlert value.
    });
});
