import {describe, expect, test} from '@jest/globals';
import { fullTitle } from './utils';

describe('fullTitle', () => {
    test('returns title when no subtitle', () => {
        const book = {
            id: 1,
            title: 'The Hobbit',
        };
        expect(fullTitle(book)).toBe('The Hobbit');
    });

    test('returns title and subtitle when subtitle', () => {
        const book = {
            id: 1,
            title: 'The Hobbit',
            subtitle: 'There and Back Again',
        };
        expect(fullTitle(book)).toBe('The Hobbit: There and Back Again');
    });

    test('returns title and subtitle when subtitle is empty string', () => {
        const book = {
            id: 1,
            title: 'The Hobbit',
            subtitle: '',
        };
        expect(fullTitle(book)).toBe('The Hobbit');
    });

    test("when title is an empty string, throws an exception", () => {
        const book = {
            id: 1,
            title: '',
            subtitle: 'There and Back Again',
        };
        expect(() => fullTitle(book)).toThrowError();
    });
});