import {describe, expect, it} from 'vitest';
import useBreakpoints, {breakpointProps} from '.';

describe('useBreakpoints', () => {
    describe('breakpointClasses', () => {
        it('maps breakpoint properties to classes', () => {
            const {breakpointClasses} = useBreakpoints(
                {
                    sm: 0,
                    md: 1,
                    lg: 2,
                    xl: 3,
                    xxl: 4,
                },
                'break-{0}-{1}',
            );

            expect(breakpointClasses.value).toStrictEqual([
                'break-sm-0',
                'break-md-1',
                'break-lg-2',
                'break-xl-3',
                'break-xxl-4',
            ]);
        });
    });

    describe('breakpointProps', () => {
        it('maps breakpoints to properies', () => {
            const props = breakpointProps(
                {},
                'break-{0}',
            );

            expect(props).toStrictEqual({
                'break-sm': {},
                'break-md': {},
                'break-lg': {},
                'break-xl': {},
                'break-xxl': {},
            });
        });
    });
});
