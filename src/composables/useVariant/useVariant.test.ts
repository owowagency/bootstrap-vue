import {describe, expect, it} from 'vitest';
import useVariant, {variantProp} from '.';

describe('variantProp', () => {
    it('sets the default value', () => {
        const prop = variantProp('');

        expect(prop.default).toBe('');
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
