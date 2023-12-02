import { expect, test, describe } from 'bun:test';
import { recalibrateLine } from './main';

describe('Recalibrate', () => {
    test('Part 1 - Recalibrate line', () => {
        // provided test cases
        expect(recalibrateLine('1abc2')).toBe(12);
        expect(recalibrateLine('pqr3stu8vwx')).toBe(38);
        expect(recalibrateLine('a1b2c3d4e5f')).toBe(15);
        expect(recalibrateLine('treb7uchet')).toBe(77);

        // test no digits
        expect(recalibrateLine('abcd')).toBe(0);
        expect(recalibrateLine('@#$%')).toBe(0);

        // test preceding zero
        expect(recalibrateLine('0abcd')).toBe(0);
        expect(recalibrateLine('abcd0')).toBe(0);
        expect(recalibrateLine('0abc0d')).toBe(0);
        expect(recalibrateLine('0abc6d')).toBe(6);
    });

    test('Part 1 - Recalibrate sum', () => {
        const sum =
            recalibrateLine('1abc2') +
            recalibrateLine('pqr3stu8vwx') +
            recalibrateLine('a1b2c3d4e5f') +
            recalibrateLine('treb7uchet');
        expect(sum).toBe(142);
    });
});
