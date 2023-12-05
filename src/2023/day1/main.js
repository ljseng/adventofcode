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

export const replaceSpellDigits = (str) => {
    // one
    const pattern21 = /twone/gi;
    const patternx1 = /one/gi;

    // two
    const pattern82 = /eightwo/gi;
    const patternx2 = /two/gi;

    // three
    const pattern83 = /eighthree/gi;
    const patternx3 = /three/gi;

    // four, five, six, seven
    const patternx4 = /four/gi;
    const patternx5 = /five/gi;
    const patternx6 = /six/gi;
    const patternx7 = /seven/gi;

    // eight
    const pattern98 = /nineight/gi;
    const pattern58 = /fiveight/gi;
    const pattern38 = /threeight/gi;
    const pattern18 = /oneight/gi;
    const patternx8 = /eight/gi;

    // nine
    const pattern79 = /sevenine/gi;
    const patternx9 = /nine/gi;

    // replace accordingly
    return str
        .replace(pattern21, '21')
        .replace(pattern82, '82')
        .replace(pattern83, '83')
        .replace(pattern98, '98')
        .replace(pattern58, '58')
        .replace(pattern38, '38')
        .replace(pattern18, '18')
        .replace(pattern79, '79')
        .replace(patternx1, '1')
        .replace(patternx2, '2')
        .replace(patternx3, '3')
        .replace(patternx4, '4')
        .replace(patternx5, '5')
        .replace(patternx6, '6')
        .replace(patternx7, '7')
        .replace(patternx8, '8')
        .replace(patternx9, '9');
};
