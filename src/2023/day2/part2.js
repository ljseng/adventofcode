import {
    decipherGameRecord,
    findFewestCubeCountEachColor,
} from './main';

const inputPath = './part1-input.txt';
const inputFileHdr = Bun.file(inputPath);
const gameRecordsStr = await inputFileHdr.text();

const powerSum = gameRecordsStr
    .trim('\n')
    .split('\n')
    .map(decipherGameRecord)
    .map(findFewestCubeCountEachColor)
    .reduce((powerSum, record) => {
        powerSum +=
            record.fewest.red * record.fewest.green * record.fewest.blue;
        return powerSum;
    }, 0);

console.log('Part 2 - Power sum of fewest number of cubes of each color:', powerSum);
