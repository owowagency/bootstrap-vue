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

    componentSlotRenderTest(Table, 'header-id-content', {props});

    componentSlotRenderTest(Table, 'row', {props});

    componentSlotRenderTest(Table, 'top-row', {props});

    componentSlotRenderTest(Table, 'bottom-row', {props});

    componentSlotRenderTest(Table, 'id', {props});

    componentSlotRenderTest(Table, 'id-content', {props});

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

    it('emits event on hover table row', async() => {
        const wrapper = shallowMount(Table, {
            props: {
                ...props,
                'onHover:row': () => 'test',
            },
        });

        await wrapper.find('tbody tr').trigger('mouseenter');

        expect(wrapper.emitted('hover:row')[0]).toEqual([props.items[0], expect.any(MouseEvent)]);
    });

    it('renders labelClass when given', () => {
        const wrapper = shallowMount(Table, {
            props: {
                ...props,
                theadTrClass: 'bg-gray-100',
                tbodyTrClass: 'bg-gray-200',
            },
        });

        const headTr = wrapper.find('thead tr');
        const bodyTr = wrapper.find('tbody tr');

        expect(headTr.classes()).toContain('bg-gray-100');
        expect(bodyTr.classes()).toContain('bg-gray-200');
    });

    it('renders tbody trClass when given as function', () => {
        const wrapper = shallowMount(Table, {
            props: {
                ...props,
                tbodyTrClass: (item: any) => (item.id === 1 ? 'bg-gray-200' : 'bg-gray-100'),
            },
        });

        const bodyTr = wrapper.findAll('tbody tr');

        expect(bodyTr[0].classes()).toContain('bg-gray-200');
        expect(bodyTr[1].classes()).toContain('bg-gray-100');
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

        // Check if sorts are correct as start with defined properties, that is 'asc'
        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'asc'});

        // After clicking first column heading sort directions should be 'desc'
        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-desc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'desc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{id: 'desc'}]);

        // After clicking second column heading, first heading should not
        // have sorting, and second column should have 'asc' sort
        await secondTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable']);

        expect(secondTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({name: 'asc'});

        expect(wrapper.emitted('sort')[1]).toEqual([{name: 'asc'}]);
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

        // Check if sorts are correct as start with defined properties, that is 'asc'
        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'asc'});

        // After clicking first column heading sort directions should be 'desc'
        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-desc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'desc'});

        expect(wrapper.emitted('sort')[0]).toEqual([{id: 'desc'}]);

        // After clicking second column, first column should stay untucked
        // and second column should have 'asc' sort
        await secondTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-desc']);

        expect(secondTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({id: 'desc', name: 'asc'});

        expect(wrapper.emitted('sort')[1]).toEqual([{id: 'desc', name: 'asc'}]);

        // After clicking first column again, it should clear first column's sorting
        await firstTh.trigger('click');

        expect(firstTh.classes()).toEqual(['table-heading-sortable']);

        expect(secondTh.classes()).toEqual(['table-heading-sortable', 'table-heading-sortable-asc']);

        expect(wrapper.vm.sorted).toStrictEqual({name: 'asc'});

        expect(wrapper.emitted('sort')[2]).toEqual([{name: 'asc'}]);
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
