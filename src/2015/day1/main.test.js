import { expect, test, describe } from 'bun:test';

import { decodeFloor } from './main';

describe('Decode floor', () => {
    test('Part 1', () => {
        expect(decodeFloor('(())')).toBe(0);
        expect(decodeFloor('()()')).toBe(0);
        expect(decodeFloor('(((')).toBe(3);
            expect(decodeFloor('(()(()(')).toBe(3);
                expect(decodeFloor('())')).toBe(-1);
                expect(decodeFloor('))(')).toBe(-1);
                expect(decodeFloor(')))')).toBe(-3);
            expect(decodeFloor(')())())')).toBe(-3);
    });
});
