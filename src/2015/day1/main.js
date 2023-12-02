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
