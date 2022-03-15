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
    {label: 'ajdie', key: 'id', sortable: true, sort: 'asc'},
    {label: 'neem', key: 'name', sortable: true},
    {label: 'type', key: 'type'},
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

    componentSlotRenderTest(Table, 'row', {props});

    componentSlotRenderTest(Table, 'id', {props});

    componentSlotRenderTest(Table, 'no-items', {
        props: {
            items: [],
        },
    });

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
});

describe('sort', () => {
    it('sorts header if fields are sortable', async() => {
        const wrapper = shallowMount(Table, {
            props: {fields},
        });

        const th = wrapper.findAll('th');

        const firstTh = th[0];

        const secondTh = th[1];

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'asc'});

        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-desc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'desc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{id: 'desc'}]);

        await secondTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable']);

        expect(secondTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({name: 'asc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{name: 'asc'}]);
    });

    it('sorts multiple column on multi sort', async() => {
        const wrapper = shallowMount(Table, {
            props: {
                fields,
                multiSort: true,
            },
        });

        const th = wrapper.findAll('th');

        const firstTh = th[0];

        const secondTh = th[1];

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'asc'});

        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-desc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'desc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{id: 'desc'}]);

        await secondTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-desc']);

        expect(secondTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'desc', name: 'asc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{id: 'desc', name: 'asc'}]);

        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable']);

        expect(secondTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({name: 'asc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{name: 'asc'}]);
    });

    it('does not emit when field is not sortable', async() => {
        const wrapper = shallowMount(Table, {
            props: {fields: [{label: 'yooo', key: 'oooy'}]},
        });

        const firstTh = wrapper.find('th');

        await firstTh.trigger('click');

        expect(wrapper.emitted('sort')).toBeUndefined();
    });
});
