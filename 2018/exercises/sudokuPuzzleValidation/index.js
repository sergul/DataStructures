function sudoku2(grid) {
    let row = {};
    let column = {};
    let section = {};
    let rowIndex = 0;
    let columnIndex = 0;
    let rowIndexSection = 0;
    let columnIndexSection = 0;
    let lapIndex = 0;
    let valueRow;
    let valueCol;
    let sectionvalue;

    while(lapIndex < grid.length) {
        while (columnIndex < grid.length) {
            valueRow = grid[rowIndex][columnIndex];
            valueCol = grid[columnIndex][rowIndex];
            
            if (!isNaN(valueRow)) {
                row[valueRow] = ++row[valueRow] || 1;
                if (row[valueRow] > 1) {
                    return false;
                }
            }
            if (!isNaN(valueCol)) {
                column[valueCol] = ++column[valueCol] || 1;
                if (column[valueCol] > 1) {
                    return false;
                }
            }
            ++columnIndex;


            sectionvalue = grid[rowIndexSection][columnIndexSection++];
            if (!isNaN(sectionvalue)) {
                section[sectionvalue] = ++section[sectionvalue] || 1;
                if (section[sectionvalue] > 1) {
                    return false;
                }
            }
            if (columnIndexSection % 3 === 0) {
                rowIndexSection++;
                columnIndexSection -= 3;
            }
            
        }
        rowIndex = ++lapIndex;
        if (lapIndex % 3 === 0) {
            columnIndexSection = 0;
        } else {
            columnIndexSection += 3;
            rowIndexSection -= 3;
        }
        
        columnIndex = 0;
        print(row);
        print(column);
        row = {};
        column = {};
        section = {};
    }
    
    return true;
}

let grid = 
[["1","2","3","!",".",".","5",".","."],
 ["4","5","6","!",".",".",".",".","3"], 
 ["7","8","9","!",".",".",".",".","5"], 
 ["!","!","!",".","2",".","4",".","."], 
 [".",".","7",".",".",".","3",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".","3","4",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".",".","5","2",".","."]];

sudoku2(grid);

function print(obj) {
    let arr = [];
    for (let value in obj) {
        arr.push(value);
    }
    console.log(arr.join(','));
}