import {describe, expect, it} from 'vitest'
import templateString from '.';

describe('templateString', () => {
    it('templates a single value', () => {
        const templatedString = templateString('a-{0}', 'b');

        expect(templatedString).toBe('a-b');
    });

    it('templates an array of values', () => {
        const templatedString = templateString('a-{0}-{1}', ['b', 'c']);

        expect(templatedString).toBe('a-b-c');
    });

    it('does not template a single undefined', () => {
        const templatedString = templateString('a-{0}', undefined);

        expect(templatedString).toBeUndefined();
    });

    it('does not template an array of values with undefined', () => {
        const templatedString = templateString('a-{0}-{1}', ['b', undefined]);

        expect(templatedString).toBeUndefined();
    });
});
