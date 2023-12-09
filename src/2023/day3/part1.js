import { findPartNumbers } from './main';

const inputPath = './part1-input.txt';
const inputFileHdr = Bun.file(inputPath);
const puzzle = await inputFileHdr.text();

const sum = findPartNumbers(
    puzzle
        .trim('\n')
        .split('\n')
        .map((line) => line.split('')),
).reduce((sum, n) => (sum += n));

console.log('Part 1 - Sum of part numbers:', sum);
