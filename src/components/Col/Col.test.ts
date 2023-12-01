import Col from '.';
import {describe} from 'vitest';

describe('template', () => {
    componentRenderTest(Col);

    componentSlotRenderTest(Col);

    componentWrapperClassTest(Col, {cols: 1}, 'col-1');
    componentWrapperClassTest(Col, {sm: 2}, 'col-sm-2');
    componentWrapperClassTest(Col, {md: 3}, 'col-md-3');
    componentWrapperClassTest(Col, {lg: 4}, 'col-lg-4');
    componentWrapperClassTest(Col, {xl: 5}, 'col-xl-5');
    componentWrapperClassTest(Col, {xxl: 6}, 'col-xxl-6');

    componentWrapperClassTest(Col, {offset: 1}, 'offset-1');
    componentWrapperClassTest(Col, {offsetSm: 2}, 'offset-sm-2');
    componentWrapperClassTest(Col, {offsetMd: 3}, 'offset-md-3');
    componentWrapperClassTest(Col, {offsetLg: 4}, 'offset-lg-4');
    componentWrapperClassTest(Col, {offsetXl: 5}, 'offset-xl-5');
    componentWrapperClassTest(Col, {offsetXxl: 6}, 'offset-xxl-6');

    componentWrapperClassTest(Col, {order: 1}, 'order-1');
    componentWrapperClassTest(Col, {orderSm: 2}, 'order-sm-2');
    componentWrapperClassTest(Col, {orderMd: 3}, 'order-md-3');
    componentWrapperClassTest(Col, {orderLg: 4}, 'order-lg-4');
    componentWrapperClassTest(Col, {orderXl: 5}, 'order-xl-5');
    componentWrapperClassTest(Col, {orderXxl: 6}, 'order-xxl-6');
});
