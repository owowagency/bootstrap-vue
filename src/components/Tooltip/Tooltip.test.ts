import Tooltip from '@/components/Tooltip';

describe('template', () => {
    componentRenderTest(Tooltip);

    componentWrapperTagTest(Tooltip, {props: {tag: 'button'}});
});
