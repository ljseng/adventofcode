import { decodeFloor } from './main';

const part1InputPath = './part1-input.txt';
const part1InputFileHdr = Bun.file(part1InputPath);
const part1InstructionStr = await part1InputFileHdr.text();
console.log('Part 1 - Floor', decodeFloor(part1InstructionStr));
