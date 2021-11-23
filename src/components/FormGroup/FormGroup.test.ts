import FormControl from '@/components/FormControl';
import FormGroup from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(FormGroup, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentSlotRenderTest(FormGroup);

    it('renders label when given', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {
                id: 'some-id',
                label: 'I am a label',
            },
        });

        const label = wrapper.find('.form-label');

        expect(label.text()).toBe('I am a label');

        expect(label.attributes('for')).toBe('some-id');
    });

    it('renders labelClass when given', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {
                // Add label so it will be rendered.
                label: 'I am a label',
                labelClass: 'text-primary',
            },
        });

        const label = wrapper.find('.form-label');

        expect(label.classes()).toContain('text-primary');
    });

    it('renders description when given', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {description: 'I am a description'},
        });

        const description = wrapper.find('.form-label .form-text');

        expect(description.text()).toBe('I am a description');
    });

    it('adds validatity class to form control', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {
                invalidFeedback: 'erroooooreeee',
                validFeedback: 'well done!',
            },
        });

        const formControl = wrapper.findComponent(FormControl);

        expect(formControl.classes()).toStrictEqual(['is-invalid', 'is-valid']);
    });

    it('emits update model value when form control emits it', () => {
        const wrapper = shallowMount(FormGroup);

        const formControl = wrapper.findComponent(FormControl);

        formControl.vm.$emit('update:modelValue', 'hello');

        expect(wrapper.emitted('update:modelValue')[0]).toStrictEqual(['hello']);
    });

    it('renders invalid feedback', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {invalidFeedback: 'errooore'},
        });

        const invalidFeedback = wrapper.find('.invalid-feedback');

        expect(invalidFeedback.text()).toBe('errooore');
    });

    it('renders valid feedback', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {validFeedback: 'well done!'},
        });

        const validFeedback = wrapper.find('.valid-feedback');

        expect(validFeedback.text()).toBe('well done!');
    });

    it('renders help text', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {helpText: 'some more info'},
        });

        const helpText = wrapper.find('.form-text');

        expect(helpText.text()).toBe('some more info');
    });
});

describe('isInvalid', () => {
    it('is false when has no invalid feedback', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {invalidFeedback: ''},
        });

        expect(wrapper.vm.isInvalid).toBe(false);
    });

    it('is true when has invalid feedback', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {invalidFeedback: 'erroooreeee'},
        });

        expect(wrapper.vm.isInvalid).toBe(true);
    });
});

describe('isValid', () => {
    it('is false when has no valid feedback', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {validFeedback: ''},
        });

        expect(wrapper.vm.isValid).toBe(false);
    });

    it('is true when has valid feedback', () => {
        const wrapper = shallowMount(FormGroup, {
            props: {validFeedback: 'well done'},
        });

        expect(wrapper.vm.isValid).toBe(true);
    });
});
