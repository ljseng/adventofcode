export const hasAdjacentSymbol = (grid, [row, col]) => {
    // generate rows to scan
    const rows = [];
    if (row - 1 >= 0) {
        rows.push(row - 1); // previous row
    }
    rows.push(row); // current row
    if (row + 1 < grid.length) {
        rows.push(row + 1); // next row
    }

    // generate columns to scan
    const cols = [];
    if (col - 1 >= 0) {
        cols.push(col - 1); // previous column
    }
    cols.push(col); // current column
    if (col + 1 < grid[row].length) {
        cols.push(col + 1); // next column
    }

    let hasAdjacentSymbol = false;
    const regexIsSymbol = /[^0-9.]/;

    // begin the scan
    for (const r of rows) {
        for (const c of cols) {
            if (r === row && c === col) {
                // nop. skip coordinate to check. should have checked before coming in
                continue;
            }

            const char = grid[r][c];
            hasAdjacentSymbol = regexIsSymbol.test(char);

            if (hasAdjacentSymbol) {
                // console.log('found', r, c, char);
                break; // early break if any column in current scanned row contains symbol
            }
        }

        if (hasAdjacentSymbol) {
            break; // early break if any column in scanned row contains symbol
        }
    }

    return hasAdjacentSymbol;
};

export const findPartNumbers = (grid) => {
    const partNumbers = [];
    let isPartNumber = false;
    let currentNumber = 0;
    const regexIsDigit = /[0-9]/;

    const rowMaxCount = grid.length;
    const colMaxCount = grid[0].length;
    for (let row = 0; row < rowMaxCount; row++) {
        for (let col = 0; col < colMaxCount; col++) {
            const char = grid[row][col];

            if (regexIsDigit.test(char)) {
                currentNumber *= 10;
                currentNumber += Number(char);

                isPartNumber =
                    isPartNumber || hasAdjacentSymbol(grid, [row, col]);
            } else if (isPartNumber) {
                partNumbers.push(currentNumber);
                currentNumber = 0;
                isPartNumber = false;
            } else {
                currentNumber = 0;
            }
        }
    }

    return partNumbers;
};
