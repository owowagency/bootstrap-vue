import useDisabled from '.';

describe('useDisabled', () => {
    describe('disabledClass', () => {
        it('is active', () => {
            const {disabledClass} = useDisabled(true);

            expect(disabledClass.value).toBe('disabled');
        });

        it('is undefined', () => {
            const {disabledClass} = useDisabled(false);

            expect(disabledClass.value).toBeUndefined();
        });
    });
});
