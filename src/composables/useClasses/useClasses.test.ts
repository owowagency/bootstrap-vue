import useClasses from '.';

describe('classes', () => {
    it('contains filtered unique classes', () => {
        const {classes} = useClasses([
            'class',
            '',
            undefined,
            'class',
        ]);

        expect(classes.value).toStrictEqual(['class']);
    });
});
