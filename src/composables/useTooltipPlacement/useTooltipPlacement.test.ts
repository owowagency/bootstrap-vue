import {tooltipFallbackPlacementProps, tooltipFallbackPlacements, tooltipPlacementProps, tooltipPlacements} from '.';

describe('tooltipFallbackPlacementProps', () => {
    describe('tooltipFallbackPlacement', () => {
        tooltipFallbackPlacements.forEach((p) => {
            it(`passes validation with ${p}`, () => {
                const result = tooltipFallbackPlacementProps.fallbackPlacements.validator([p]);

                expect(result).toBe(true);
            });
        });

        it('passes validation with a non fallback placement', () => {
            const result = tooltipFallbackPlacementProps.fallbackPlacements.validator(['non-tooltip-fallback-placement']);

            expect(result).toBe(false);
        });
    });
});

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
