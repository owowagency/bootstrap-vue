import {colProp} from '.';

describe('colProp', () => {
    it('passes validation when 1', () => {
        const valid = colProp.validator(1);

        expect(valid).toBe(true);
    });

    it('passes validation when 12', () => {
        const valid = colProp.validator(12);

        expect(valid).toBe(true);
    });

    it('fails validation when 0 or lower', () => {
        const valid = colProp.validator(0);

        expect(valid).toBe(false);
    });

    it('fails validation when 13 or higher', () => {
        const valid = colProp.validator(13);

        expect(valid).toBe(false);
    });
});
