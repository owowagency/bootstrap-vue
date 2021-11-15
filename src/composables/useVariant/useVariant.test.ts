import useVariant, {variantProps, variants} from '.';

describe('variantProps', () => {
    describe('variant', () => {
        variants.forEach((s) => {
            it(`passes validation with ${s}`, () => {
                const result = variantProps.variant.validator(s);

                expect(result).toBe(true);
            });
        });

        it('passes validation with empty value', () => {
            const result = variantProps.variant.validator(undefined);

            expect(result).toBe(true);
        });

        it('passes validation with a non variant', () => {
            const result = variantProps.variant.validator('non-variant');

            expect(result).toBe(false);
        });
    });
});

describe('useVariant', () => {
    describe('variantClass', () => {
        it('is being templated', () => {
            const {variantClass} = useVariant('primary', 'btn-{0}');

            expect(variantClass.value).toBe('btn-primary');
        });
    });
});
