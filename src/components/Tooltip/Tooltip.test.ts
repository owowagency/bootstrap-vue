import Tooltip from '@/components/Tooltip';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(Tooltip);

    componentWrapperTagTest(Tooltip, {props: {tag: 'button'}});
});
