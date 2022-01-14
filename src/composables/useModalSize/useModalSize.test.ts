import useModalSize, {modalSizeProps, modalSizes} from '.';

describe('modalSizeProps', () => {
    describe('modalSize', () => {
        modalSizes.forEach((s) => {
            it(`passes validation with ${s}`, () => {
                const result = modalSizeProps.modalSize.validator(s);

                expect(result).toBe(true);
            });
        });

        it('passes validation with a non size', () => {
            const result = modalSizeProps.modalSize.validator('non-size');

            expect(result).toBe(false);
        });
    });
});

describe('useSize', () => {
    describe('sizeClass', () => {
        it('is being templated', () => {
            const {sizeClass} = useModalSize('lg');

            expect(sizeClass.value).toBe('modal-lg');

            expect(sizeClass.value).not.toBe('modal-sm');
        });
    });
});
