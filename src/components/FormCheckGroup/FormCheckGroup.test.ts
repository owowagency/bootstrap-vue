import {FormCheck} from '@/components';
import FormCheckGroup from '.';
import {shallowMount} from '@vue/test-utils';

// Mock uuid module because it is used as `id` in `FormCheck` and we are unable
// to reach that property directly.
jest.mock('uuid', () => ({
    v4: () => 'wordpres-sist-hebe-stwe-bsolution!!!',
}));

const items = [
    {label: 'Item one', value: 'one'},
    {value: 'two'},
];

describe('template', () => {
    componentRenderTest(FormCheckGroup, {props: {items}});

    componentRenderTest(
        FormCheckGroup,
        {props: {items, type: 'radio'}},
        true,
        'renders radio',
    );

    it('emits on update:modelValue of child', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, type: 'checkbox'}},
        );

        wrapper.findComponent(FormCheck)
            .vm
            .$emit('update:modelValue', 'one');

        expect(wrapper.emitted('update:modelValue')[0]).toEqual([['one']]);
    });
});

describe('modelValue', () => {
    it('is an array by default when is type checkbox', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, type: 'checkbox'}},
        );

        expect(wrapper.vm.modelValue).toEqual([]);
    });

    it('is undefined by default when is type radio', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, type: 'radio'}},
        );

        expect(wrapper.vm.modelValue).toBeUndefined();
    });
});

describe('name', () => {
    it('is undefined when type is checkbox', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, type: 'checkbox'}},
        );

        expect(wrapper.vm.name).toBeUndefined();
    });

    it('is uuid when type is radio', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, type: 'radio'}},
        );

        expect(wrapper.vm.name).toBe('owow-wordpres-sist-hebe-stwe-bsolution!!!');
    });
});

describe('isSwitch', () => {
    it('is equal to switch', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, switch: true}},
        );

        expect(wrapper.vm.switch).toBe(true);
    });
});

describe('value', () => {
    it('is equal to modelValue', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, modelValue: ['two']}},
        );

        expect(wrapper.vm.value).toEqual(['two']);
    });

    it('emits update:modelValue when set', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items}},
        );

        wrapper.vm.value = ['two'];

        expect(wrapper.emitted('update:modelValue')[0]).toEqual([['two']]);
    });
});

describe('getValue', () => {
    describe('when checkbox', () => {
        it('returns true when in value array', () => {
            const wrapper = shallowMount(
                FormCheckGroup,
                {props: {items, modelValue: ['two'], type: 'checkbox'}},
            );

            expect(wrapper.vm.getValue(0)).toBe(true);
        });

        it('returns false when not in value array', () => {
            const wrapper = shallowMount(
                FormCheckGroup,
                {props: {items, modelValue: ['two'], type: 'checkbox'}},
            );

            expect(wrapper.vm.getValue(1)).toBe(false);
        });
    });

    describe('when radio', () => {
        it('returns value', () => {
            const wrapper = shallowMount(
                FormCheckGroup,
                {props: {items, modelValue: 'two', type: 'radio'}},
            );

            expect(wrapper.vm.getValue(0)).toEqual('two');
        });
    });
});

describe('setValue', () => {
    it('sets value in array when checkbox', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, type: 'checkbox'}},
        );

        wrapper.vm.setValue('two', 1);

        // It is not possible to assert `value` since it is a computed getter
        // and setter. Eventually it will emit `update:modelValue` when being
        // set.
        expect(wrapper.emitted('update:modelValue')[0]).toEqual([[undefined, 'two']]);
    });

    it('sets value in array when checkbox', () => {
        const wrapper = shallowMount(
            FormCheckGroup,
            {props: {items, type: 'radio'}},
        );

        wrapper.vm.setValue('one', 0);

        // It is not possible to assert `value` since it is a computed getter
        // and setter. Eventually it will emit `update:modelValue` when being
        // set.
        expect(wrapper.emitted('update:modelValue')[0]).toEqual(['one']);
    });
});
