import {tooltipPlacementProps, tooltipPlacements} from '.';

describe('tooltipPlacementProps', () => {
    describe('tooltipPlacement', () => {
        tooltipPlacements.forEach((p) => {
            it(`passes validation with ${p}`, () => {
                const result = tooltipPlacementProps.placement.validator(p);

                expect(result).toBe(true);
            });
        });

        it('passes validation with a non placement', () => {
            const result = tooltipPlacementProps.placement.validator('non-tooltip-placement');

            expect(result).toBe(false);
        });
    });
});
