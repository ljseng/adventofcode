export const decipherGameRecord = (record) => {
    const regexGameDraws = /^(?:Game )(?<id>\d+)(?:: )(?<drawsStr>.*)/g;
    const { id, drawsStr } = regexGameDraws.exec(record)?.groups || {};

    if (!id || !drawsStr) {
        return null;
    }

    const draws = [];
    let match;

    const regexCubeCountColor =
        /(?<cubeCount>\d+) (?<cubeColor>green|blue|red)/g;
    while ((match = regexCubeCountColor.exec(drawsStr)) !== null) {
        const { cubeCount, cubeColor } = match.groups;
        draws.push({
            cubeCount: Number(cubeCount),
            cubeColor: cubeColor,
        });
    }

    return {
        id: Number(id),
        draws: draws,
    };
};

export const findPossibleDraw = (draw) => {
    let possible = false;

    switch (draw.cubeColor) {
        case 'red':
            possible = draw.cubeCount <= 12;
            break;
        case 'green':
            possible = draw.cubeCount <= 13;
            break;
        case 'blue':
            possible = draw.cubeCount <= 14;
            break;
        default:
            // nop
            break;
    }

    return possible;
};
