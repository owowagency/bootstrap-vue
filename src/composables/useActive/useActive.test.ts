import {describe, expect, it} from 'vitest'
import useActive from '.';

describe('useActive', () => {
    describe('activeClass', () => {
        it('is active', () => {
            const {activeClass} = useActive(true);

            expect(activeClass.value).toBe('active');
        });

        it('is undefined', () => {
            const {activeClass} = useActive(false);

            expect(activeClass.value).toBeUndefined();
        });
    });
});
