import {describe, expect, it} from 'vitest';
import {triggerProps, triggers} from '.';

describe('triggerProps', () => {
    describe('trigger', () => {
        triggers.forEach((t) => {
            it(`passes validation with ${t}`, () => {
                const result = triggerProps.trigger.validator(t);

                expect(result).toBe(true);
            });
        });

        it('passes validation with a trigger array', () => {
            const result = triggerProps.trigger.validator(['hover', 'focus']);

            expect(result).toBe(true);
        });

        it('passes validation with a non trigger', () => {
            const result = triggerProps.trigger.validator('non-trigger');

            expect(result).toBe(false);
        });

        it('passes validation with a non trigger array', () => {
            const result = triggerProps.trigger.validator(['click', 'non-trigger']);

            expect(result).toBe(false);
        });
    });
});
