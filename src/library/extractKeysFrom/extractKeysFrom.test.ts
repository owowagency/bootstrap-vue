import {expect, it} from 'vitest';
import extractKeysFrom from '.';

it('extracts keys from object', () => {
    const result = extractKeysFrom(['a'], {a: 1, b: 2});

    expect(result.value).toEqual({a: 1});
});
