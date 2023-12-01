import {describe, expect, it} from 'vitest';
import {idProps} from '.';

describe('idProps', () => {
    describe('id', () => {
        it('has a prefixed uuid default value', () => {
            const defaultValue = idProps.id.default();

            expect(defaultValue).toMatch(/^owow-[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
        });
    });
});
