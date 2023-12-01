import Breadcrumb from '.';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(Breadcrumb);

    componentSlotRenderTest(Breadcrumb);
});
