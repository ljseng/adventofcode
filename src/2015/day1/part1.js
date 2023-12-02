import { decodeFloor } from "./main";

const inputPath = "./part1-input.txt";
const inputFileHdr = Bun.file(inputPath);
const instructionStr = await inputFileHdr.text();

console.log("Part 1 - Floor:", decodeFloor(instructionStr));
