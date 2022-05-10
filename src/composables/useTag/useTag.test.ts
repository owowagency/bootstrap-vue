import {tagProps} from '.';

describe('tagProps', () => {
    it('has a default', () => {
        expect(tagProps().tag.default).toBe('div');
    });

    it('can set the default', () => {
        expect(tagProps('button').tag.default).toBe('button');
    });
});
