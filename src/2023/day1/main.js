export const recalibrateLine = (scrambledLine) => {
    const digits = scrambledLine
        .split('')
        .filter((char) => char >= '0' && char <= '9');

    // No digits
    if (digits.length === 0) {
        return 0;
    }

    // Only one digit
    if (digits.length === 1) {
        return Number(`${digits[0]}${digits[0]}`);
    }

    // Take first and last digits
    return Number(`${digits[0]}${digits[digits.length - 1]}`);
};

const expandSpellDigitsSharingChar = (str) => {
    const pattern21 = /twone/gi;
    const pattern82 = /eightwo/gi;
    const pattern83 = /eighthree/gi;
    const pattern98 = /nineight/gi;
    const pattern58 = /fiveight/gi;
    const pattern38 = /threeight/gi;
    const pattern18 = /oneight/gi;
    const pattern79 = /sevenine/gi;

    return str
        .replace(pattern21, 'twoone')
        .replace(pattern82, 'eighttwo')
        .replace(pattern83, 'eightthree')
        .replace(pattern98, 'nineeight')
        .replace(pattern58, 'fiveeight')
        .replace(pattern38, 'threeeight')
        .replace(pattern18, 'oneeight')
        .replace(pattern79, 'sevennine');
};

export const replaceSpellDigits = (str) => {
    const pattern1 = /one/gi;
    const pattern2 = /two/gi;
    const pattern3 = /three/gi;
    const pattern4 = /four/gi;
    const pattern5 = /five/gi;
    const pattern6 = /six/gi;
    const pattern7 = /seven/gi;
    const pattern8 = /eight/gi;
    const pattern9 = /nine/gi;

    return expandSpellDigitsSharingChar(str)
        .replace(pattern1, '1')
        .replace(pattern2, '2')
        .replace(pattern3, '3')
        .replace(pattern4, '4')
        .replace(pattern5, '5')
        .replace(pattern6, '6')
        .replace(pattern7, '7')
        .replace(pattern8, '8')
        .replace(pattern9, '9');
};
