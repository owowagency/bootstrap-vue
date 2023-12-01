import {describe, expect, it} from 'vitest';
import {formControlProps, types} from '.';

describe('formControlProps', () => {
    describe('type', () => {
        types.forEach((t) => {
            it(`passes validation with ${t}`, () => {
                const result = formControlProps.type.validator(t);

                expect(result).toBe(true);
            });
        });

        it('fails validation with invalid', () => {
            const result = formControlProps.type.validator('invalid');

            expect(result).toBe(false);
        });
    });
});
