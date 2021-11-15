import Row from '.';

describe('template', () => {
    componentRenderTest(Row);

    componentSlotRenderTest(Row);

    componentWrapperTagTest(Row, {props: {tag: 'ul'}});

    componentWrapperClassTest(Row, {align: 'center'}, 'align-items-center');

    componentWrapperClassTest(Row, {cols: 1}, 'row-cols-1');
    componentWrapperClassTest(Row, {colsSm: 2}, 'row-cols-sm-2');
    componentWrapperClassTest(Row, {colsMd: 3}, 'row-cols-md-3');
    componentWrapperClassTest(Row, {colsLg: 4}, 'row-cols-lg-4');
    componentWrapperClassTest(Row, {colsXl: 5}, 'row-cols-xl-5');
    componentWrapperClassTest(Row, {colsXxl: 6}, 'row-cols-xxl-6');

    componentWrapperClassTest(Row, {gutters: 1}, 'g-1');
    componentWrapperClassTest(Row, {guttersSm: 2}, 'g-sm-2');
    componentWrapperClassTest(Row, {guttersMd: 3}, 'g-md-3');
    componentWrapperClassTest(Row, {guttersLg: 4}, 'g-lg-4');
    componentWrapperClassTest(Row, {guttersXl: 5}, 'g-xl-5');
    componentWrapperClassTest(Row, {guttersXxl: 6}, 'g-xxl-6');

    componentWrapperClassTest(Row, {guttersX: 1}, 'gx-1');
    componentWrapperClassTest(Row, {guttersXSm: 2}, 'gx-sm-2');
    componentWrapperClassTest(Row, {guttersXMd: 3}, 'gx-md-3');
    componentWrapperClassTest(Row, {guttersXLg: 4}, 'gx-lg-4');
    componentWrapperClassTest(Row, {guttersXXl: 5}, 'gx-xl-5');
    componentWrapperClassTest(Row, {guttersXXxl: 6}, 'gx-xxl-6');

    componentWrapperClassTest(Row, {guttersY: 1}, 'gy-1');
    componentWrapperClassTest(Row, {guttersYSm: 2}, 'gy-sm-2');
    componentWrapperClassTest(Row, {guttersYMd: 3}, 'gy-md-3');
    componentWrapperClassTest(Row, {guttersYLg: 4}, 'gy-lg-4');
    componentWrapperClassTest(Row, {guttersYXl: 5}, 'gy-xl-5');
    componentWrapperClassTest(Row, {guttersYXxl: 6}, 'gy-xxl-6');

    componentWrapperClassTest(Row, {justify: 'around'}, 'justify-content-around');
});
