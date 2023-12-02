export const decodeFloor = (instructionStr) => {
  return instructionStr.split("").reduce((floor, instruction) => {
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

export const findFirstInstructionIdxEnterBasement = (instructionStr) => {
  let floor = 0;
  let idx = 0;

  const instructions = instructionStr.split("");
  for (let instruction of instructions) {
    ++idx;

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

    if (floor < 0) {
      break;
    }
  }

  return idx;
};
