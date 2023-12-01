import {describe, expect, it} from 'vitest'
import useClasses from '.';

describe('useClasses', () => {
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
});
