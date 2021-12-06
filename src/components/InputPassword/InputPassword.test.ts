import Button from '@/components/Button';
import FormControl from '@/components/FormControl';
import InputPassword from '.';
import {mount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(InputPassword);
});

describe('toggleType', () => {
    it('toggles type', async () => {
        const wrapper = mount(InputPassword);

        const button = wrapper.findComponent(Button);

        const formControl = wrapper.findComponent(FormControl);

        expect(formControl.props('type')).toBe('password');

        await button.trigger('click');

        expect(formControl.props('type')).toBe('text');

        await button.trigger('click');

        expect(formControl.props('type')).toBe('password');
    });
});
