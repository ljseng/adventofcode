import { replaceSpellDigits, recalibrateLine } from './main';

const inputPath = './part2-input.txt';
const inputFileHdr = Bun.file(inputPath);
const scrambledLinesStr = await inputFileHdr.text();

const sum = scrambledLinesStr
    .trim('\n')
    .split('\n')
    .map((scrambledLine) => {
        return replaceSpellDigits(scrambledLine);
    })
    .reduce((sum, line) => {
        sum += recalibrateLine(line);
        return sum;
    }, 0);

console.log(sum);
