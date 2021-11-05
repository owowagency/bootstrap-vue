import Breadcrumb from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(Breadcrumb);

    componentSlotRenderTest(Breadcrumb);
});
