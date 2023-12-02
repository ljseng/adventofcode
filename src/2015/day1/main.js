export const decodeFloor = (instructionStr) => {
    return instructionStr.split("")
        .reduce((floor, instruction) => {
            switch (instruction) {
                case "(":
                    ++floor;
                    break;
                    case ")":
                    --floor;
                    break;
                default:
                    break;
            }

            return floor;
        }, 0);
};

const part1InputPath = './input_part1.txt';
const part1InputFileHdr = Bun.file(part1InputPath);
const part1InstructionStr = await part1InputFileHdr.text();
console.log('Part 1 - Floor', decodeFloor(part1InstructionStr));
