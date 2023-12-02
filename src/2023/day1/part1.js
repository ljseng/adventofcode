import { recalibrateLine } from './main';

const inputPath = './part1-input.txt';
const inputFileHdr = Bun.file(inputPath);
const scrambledLinesStr = await inputFileHdr.text();

const sum = scrambledLinesStr
    .trim('\n')
    .split('\n')
    .reduce((sum, line) => {
        sum += recalibrateLine(line);
        return sum;
    }, 0);

console.log('Part 1 - Sum of calibration values:', sum);
