import DropdownMenuItem from '@/components/DropdownMenuItem';

describe('template', () => {
    componentRenderTest(
        DropdownMenuItem,
        {props: {label: 'Hello'}},
        true,
        'renders label',
    );

    componentRenderTest(
        DropdownMenuItem,
        {props: {active: true, label: 'there'}},
        true,
        'renders active',
    );

    componentRenderTest(
        DropdownMenuItem,
        {props: {divider: true}},
        true,
        'renders divider',
    );

    componentRenderTest(
        DropdownMenuItem,
        {props: {header: true, label: 'general kenobi'}},
        true,
        'renders header',
    );
});
