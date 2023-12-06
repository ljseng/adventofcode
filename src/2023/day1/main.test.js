import { expect, test, describe } from 'bun:test';
import { recalibrateLine, replaceSpellDigits } from './main';

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

    test('Part 2 - Replace spelled digits', () => {
        expect(replaceSpellDigits('two1nine')).toBe('219');
        expect(replaceSpellDigits('eightwothree')).toBe('823');
        expect(replaceSpellDigits('abcone2threexyz')).toBe('abc123xyz');
        expect(replaceSpellDigits('xtwone3four')).toBe('x2134');
        expect(replaceSpellDigits('4nineeightseven2')).toBe('49872');
        expect(replaceSpellDigits('zoneight234')).toBe('z18234');
        expect(replaceSpellDigits('7pqrstsixteen')).toBe('7pqrst6teen');
        expect(replaceSpellDigits('threeightwoneight')).toBe('38218');
        expect(replaceSpellDigits('threightwoneighthree')).toBe('thr82183');
    });

    test('Part 2 - Recalibrate sum', () => {
        const sum =
            recalibrateLine(replaceSpellDigits('two1nine')) +
            recalibrateLine(replaceSpellDigits('eightwothree')) +
            recalibrateLine(replaceSpellDigits('abcone2threexyz')) +
            recalibrateLine(replaceSpellDigits('xtwone3four')) +
            recalibrateLine(replaceSpellDigits('4nineeightseven2')) +
            recalibrateLine(replaceSpellDigits('zoneight234')) +
            recalibrateLine(replaceSpellDigits('7pqrstsixteen'));

        expect(sum).toBe(281);
    });
});
