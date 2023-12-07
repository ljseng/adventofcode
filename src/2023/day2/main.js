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

export const findFewestCubeCountEachColor = (record) => {
    const fewest = record.draws.reduce(
        (fewest, draw) => {
            if (draw.cubeColor === 'red' && draw.cubeCount > fewest.red) {
                fewest.red = draw.cubeCount;
            }

            if (draw.cubeColor === 'green' && draw.cubeCount > fewest.green) {
                fewest.green = draw.cubeCount;
            }

            if (draw.cubeColor === 'blue' && draw.cubeCount > fewest.blue) {
                fewest.blue = draw.cubeCount;
            }

            return fewest;
        },
        { red: 0, green: 0, blue: 0 },
    );

    return { id: record.id, fewest: fewest };
};
