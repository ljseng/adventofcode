import { decipherGameRecord, findPossibleDraw } from './main';

const inputPath = './part1-input.txt';
const inputFileHdr = Bun.file(inputPath);
const gameRecordsStr = await inputFileHdr.text();

const sum = gameRecordsStr
    .trim('\n')
    .split('\n')
    .map(decipherGameRecord)
    .filter(record => record.draws.every(findPossibleDraw))
    .reduce((sum, record) => {
        return sum + record.id;
    }, 0);

console.log('Part 1 - Sum of IDs:', sum);
