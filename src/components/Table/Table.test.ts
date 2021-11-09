import Table from '.';
import {shallowMount} from '@vue/test-utils';

const props = {
    items: [
        {id: 1, name: 'Word'},
        {id: 2, name: 'Press'},
        {id: 3, name: 'ISDABEST'},
        {id: 4, name: '#prank'},
    ],
};

const fields = [
    {label: 'ajdie', key: 'id'},
    {label: 'neem', key: 'name'},
];

describe('template', () => {
    componentRenderTest(Table);

    componentRenderTest(Table, {props}, true, 'renders with items');

    componentRenderTest(
        Table,
        {
            props: {
                ...props,
                fields,
            },
        },
        true,
        'renders with fields and items',
    );

    componentSlotRenderTest(Table, 'header-id', {props});

    componentSlotRenderTest(Table, 'id', {props});
});

describe('headers', () => {
    it('is empty when no items nor fields have been given', () => {
        const wrapper = shallowMount(Table);

        expect(wrapper.vm.headers).toStrictEqual([]);
    });

    it('extracts from item when no fields given', () => {
        const wrapper = shallowMount(Table, {props});

        expect(wrapper.vm.headers).toStrictEqual([
            {key: 'id'},
            {key: 'name'},
        ]);
    });

    it('uses fields when given', () => {
        const wrapper = shallowMount(Table, {
            props: {fields},
        });

        expect(wrapper.vm.headers).toStrictEqual(fields);
    });
});
