import {
    decipherGameRecord,
    findPossibleDraw,
    findFewestCubeCountEachColor,
} from './main';

describe('Cube Conundrum', () => {
    const inputs = [
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
        'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
        'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
    ];

    test('Part 1 - Decipher game record', () => {
        expect(decipherGameRecord(inputs[0])).toEqual({
            id: 1,
            draws: [
                { cubeCount: 3, cubeColor: 'blue' },
                { cubeCount: 4, cubeColor: 'red' },
                { cubeCount: 1, cubeColor: 'red' },
                { cubeCount: 2, cubeColor: 'green' },
                { cubeCount: 6, cubeColor: 'blue' },
                { cubeCount: 2, cubeColor: 'green' },
            ],
        });
    });

    test('Part 1 - Possible game sum', () => {
        const sum = inputs
            .map(decipherGameRecord)
            .filter((record) => record.draws.every(findPossibleDraw))
            .reduce((sum, record) => {
                return sum + record.id;
            }, 0);

        expect(sum).toBe(8);
    });

    test('Part 2 - Find fewest number of cubes of each color', () => {
        const {
            fewest: { red, green, blue },
        } = findFewestCubeCountEachColor(decipherGameRecord(inputs[0]));
        expect(red).toBe(4);
        expect(green).toBe(2);
        expect(blue).toBe(6);
    });

    test('Part 2 - Power sum of fewest number of cubes of each color', () => {
        const powerSum = inputs
            .map(decipherGameRecord)
            .map(findFewestCubeCountEachColor)
            .reduce((powerSum, record) => {
                powerSum +=
                    record.fewest.red *
                    record.fewest.green *
                    record.fewest.blue;
                return powerSum;
            }, 0);

        expect(powerSum).toBe(2286);
    });
});
