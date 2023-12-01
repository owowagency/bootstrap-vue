import {describe, expect, it} from 'vitest'
import useStringTemplate from '.';

describe('templatedString', () => {
    it('contains filtered unique classes', () => {
        const {templatedString} = useStringTemplate(
            '{0}-{1}-{2}',
            ['tem', 'pla', 'ted'],
        );

        expect(templatedString.value).toBe('tem-pla-ted');
    });
});
