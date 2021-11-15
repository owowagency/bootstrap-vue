import {formControlProps, types} from '.';

describe('formControlProps', () => {
    describe('type', () => {
        types.forEach((t) => {
            it(`passes validation with ${t}`, () => {
                const result = formControlProps.type.validator(t);

                expect(result).toBe(true);
            });
        });

        it('fails validation with submit', () => {
            const result = formControlProps.type.validator('submit');

            expect(result).toBe(false);
        });
    });
});
