import { expect, test, describe } from 'bun:test';
import { decodeFloor, findFirstInstructionIdxEnterBasement } from './main';

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

    test('Part 2', () => {
        expect(findFirstInstructionIdxEnterBasement(')')).toBe(1);
        expect(findFirstInstructionIdxEnterBasement('()())')).toBe(5);
    });
});
