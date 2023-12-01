import {describe, expect, it} from 'vitest';
import useFlush from '.';

describe('useFlush', () => {
    describe('flushClass', () => {
        it('is flush templated when true', () => {
            const {flushClass} = useFlush(true, '{0}-the-toilet');

            expect(flushClass.value).toBe('flush-the-toilet');
        });

        it('is undefined when false', () => {
            const {flushClass} = useFlush(false, '{0}-the-toilet');

            expect(flushClass.value).toBeUndefined();
        });
    });
});
