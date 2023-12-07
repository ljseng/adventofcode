import { decipherGameRecord, findPossibleDraw } from './main';

describe('Cube Conundrum', () => {
    test('Part 1 - Decipher game record', () => {
        expect(
            decipherGameRecord(
                'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
            ),
        ).toEqual({
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
        const inputs = [
            'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
            'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
            'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
            'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
            'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
        ];

        const sum = inputs
            .map(decipherGameRecord)
            .filter((record) => record.draws.every(findPossibleDraw))
            .reduce((sum, record) => {
                return sum + record.id;
            }, 0);

        expect(sum).toBe(8);
    });
});
