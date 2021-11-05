import useSize, {sizeProps, sizes} from '.';

describe('sizeProps', () => {
    describe('size', () => {
        sizes.forEach((s) => {
            it(`passes validation with ${s}`, () => {
                const result = sizeProps.size.validator(s);

                expect(result).toBe(true);
            });
        });

        it(`passes validation with a non size`, () => {
            const result = sizeProps.size.validator('non-size');

            expect(result).toBe(false);
        });
    });
});

describe('useSize', () => {
    describe('sizeClass', () => {
        it('is being templated', () => {
            const {sizeClass} = useSize('lg', 'my-{0}-pipi');

            expect(sizeClass.value).toBe('my-lg-pipi');

            expect(sizeClass.value).not.toBe('my-sm-pipi');
        });
    });
});
