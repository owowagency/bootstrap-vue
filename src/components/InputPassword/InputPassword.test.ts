import {mount, shallowMount} from '@vue/test-utils';
import {nextTick, ref} from 'vue';
import Button from '@/components/Button';
import FormControl from '@/components/FormControl';
import InputPassword from '.';

describe('template', () => {
    componentRenderTest(InputPassword, {}, false);

    componentRenderTest(
        InputPassword,
        {
            props: {
                modelValue: 'Password',
                rules: [
                    {rule: /Password/, feedback: 'Yoooo'},
                    {rule: /Drowssap/, feedback: 'Ooooy'},
                ],
            },
        },
        false,
        'renders rules feedback',
    );
});

describe('toggleType', () => {
    it('toggles type', async() => {
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

describe('isValid', () => {
    const rules = [
        {rule: /[a-zA-Z]/, feedback: 'alpha'},
        {rule: /\d/, feedback: 'number'},
    ];

    it('is valid when all rules are valid', () => {
        const wrapper = shallowMount(
            InputPassword,
            {
                props: {
                    modelValue: 'A1',
                    rules,
                },
            },
        );

        expect(wrapper.vm.isValid).toBe(true);
    });

    it('is not valid when not all rules are valid', () => {
        const wrapper = shallowMount(
            InputPassword,
            {
                props: {
                    modelValue: 'A',
                    rules,
                },
            },
        );

        expect(wrapper.vm.isValid).toBe(false);
    });

    it('emits on change', async() => {
        const modelValue = ref('A');

        const wrapper = mount(InputPassword, {props: {modelValue, rules}});

        modelValue.value = 'A1';

        await nextTick();

        expect(wrapper.emitted('update:isValid')).toEqual([[true]]);
    });
});
