import { hasAdjacentSymbol, findPartNumbers } from './main';

describe('Gear Ratios', () => {
    const grid = [
        '467..114..',
        '...*......',
        '..35..633.',
        '......#...',
        '617*......',
        '.....+.58.',
        '..592.....',
        '......755.',
        '...$.*....',
        '.664.598..',
    ].map((line) => line.split(''));

    test('Part 1 - Has adjacent symbol', () => {
        expect(hasAdjacentSymbol(grid, [2, 2])).toBe(true);
        expect(hasAdjacentSymbol(grid, [9, 2])).toBe(true);
        expect(hasAdjacentSymbol(grid, [4, 1])).toBe(false);
        expect(hasAdjacentSymbol(grid, [2, 8])).toBe(false);
        expect(hasAdjacentSymbol(grid, [5, 8])).toBe(false);
        expect(hasAdjacentSymbol(grid, [0, 5])).toBe(false);
    });

    test('Part 1 - Find part numbers', () => {
        expect(findPartNumbers(grid)).toEqual([
            467, 35, 633, 617, 592, 755, 664, 598
        ]);
    });
});
