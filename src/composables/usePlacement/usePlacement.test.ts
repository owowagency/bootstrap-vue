import {describe, expect, it} from 'vitest';
import usePlacement, {placementProps, placements} from '.';

describe('placementProps', () => {
    describe('placement', () => {
        placements.forEach((p) => {
            it(`passes validation with ${p}`, () => {
                const result = placementProps.placement.validator(p);

                expect(result).toBe(true);
            });
        });

        it('passes validation with a non placement', () => {
            const result = placementProps.placement.validator('non-placement');

            expect(result).toBe(false);
        });
    });
});

describe('usePlacement', () => {
    describe('placementClass', () => {
        it('is being templated', () => {
            const {placementClass} = usePlacement('start', 'text-{0}');

            expect(placementClass.value).toBe('text-start');

            expect(placementClass.value).not.toBe('text-end');
        });
    });
});
