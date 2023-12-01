import {describe, expect, it} from 'vitest';
import useFormSelect from '.';

describe('useFormSelect', () => {
    describe('classes', () => {
        it('contains disabled, size', () => {
            const {classes} = useFormSelect({
                disabled: true,
                size: 'lg',
            });

            expect(classes.value).toEqual(['disabled', 'form-select-lg']);
        });
    });
});
