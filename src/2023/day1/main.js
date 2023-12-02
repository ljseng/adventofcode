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
