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
    const pattern1 = /(?<!tw)one/gi;
    const pattern2 = /(?<!eigh)two/gi;
    const pattern3 = /(?<!eigh)three/gi;
    const pattern4 = /four/gi;
    const pattern5 = /five/gi;
    const pattern6 = /six/gi;
    const pattern7 = /seven/gi;
    const pattern8 = /(?<!(nin|fiv|thre|on))eight/gi;
    const pattern9 = /(?<!seve)nine/gi;

    return str
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
