import useActive from '.';

describe('activeClass', () => {
    it('is active', () => {
        const {activeClass} = useActive(true);

        expect(activeClass.value).toBe('active');
    });

    it('is undefined', () => {
        const {activeClass} = useActive(false);

        expect(activeClass.value).toBeUndefined();
    });
});
