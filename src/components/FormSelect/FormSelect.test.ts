import FormSelect from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(FormSelect, {
        props: {
            items: [
                {value: 'Item 1'},
                {selected: true, value: 'Item 2'},
                {label: 'Item three', value: 'Item 3'},
            ],
        },
    });

    componentWrapperClassTest(FormSelect, {disabled: true}, 'disabled');

    componentWrapperClassTest(FormSelect, {size: 'lg'}, 'form-select-lg');

    it('adds disabled property', () => {
        const wrapper = shallowMount(FormSelect, {
            props: {disabled: true},
        });

        expect((wrapper.element as HTMLSelectElement).disabled).toBe(true);
    });
});
