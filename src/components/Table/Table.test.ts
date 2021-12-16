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
    {label: 'ajdie', key: 'id', sortable: true, asc: true},
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

    componentWrapperClassTest(Table, {hover: true}, 'table-hover');

    it('emits event on click table row', async() => {
        const wrapper = shallowMount(Table, {
            props: {
                ...props,
                'onClick:row': () => 'test',
            },
        });

        expect(wrapper.classes('table-click')).toBe(true);

        await wrapper.find('tbody tr').trigger('click');

        expect(wrapper.emitted('click:row')[0]).toEqual([props.items[0]]);
    });
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

    it('sorts header if fields are sortable', async() => {
        const wrapper = shallowMount(Table, {
            props: {fields},
        });

        const firstTh = wrapper.find('th');

        expect(firstTh.classes()).toEqual(['sortable', 'asc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'asc'});

        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['sortable', 'desc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'desc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{id: 'desc'}]);

        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['sortable']);

        expect(wrapper.vm.sorted).toStrictEqual({});

        expect(wrapper.emitted('sort')[0]).toEqual([{}]);
    });
});
