import { findFirstInstructionIdxEnterBasement } from "./main";

const inputPath = "./part2-input.txt";
const inputFileHdr = Bun.file(inputPath);
const instructionStr = await inputFileHdr.text();
console.log("Part 2 - Index:", findFirstInstructionIdxEnterBasement(instructionStr));
