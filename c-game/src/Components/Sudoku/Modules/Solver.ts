// In this case we are expecting the sudoku to be square and have a grid dividable in 3x3 sections.

// The main function that will be exported
export function Solve(Grid: Array<Array<number>>, MaxSolutions: number = 1): number {
    // Set the solutions counter
    let Solutions = 0

    // Find a empty cell
    const [Row, Column] = GetEmptyCell(Grid)

    // If we didn't find any empty cells, we are done
    if (Row === -1) {
        return 1
    }

    // Loop thru all the numbers
    for (let Value = 1; Value <= 9; Value++) {
        // Check if the number is valid
        if (CheckValid(Grid, Row, Column, Value)) {
            // Set the number
            Grid[Row][Column] = Value

            // Recursively solve the rest of the grid
            Solutions += Solve(Grid, MaxSolutions)

            // Have we fulfilled the max solutions?
            if (Solutions > MaxSolutions) {
                return Solutions
            }

            // If we didn't find any valid numbers
            Grid[Row][Column] = 0
        }
    }

    // If we didn't find any valid numbers
    return Solutions
}

// Get the first empty cell found in the grid
function GetEmptyCell(Grid: Array<Array<number>>): Array<number> {
    for (let Row = 0; Row < Grid.length; Row++) {
        for (let Columnn = 0; Columnn < Grid.length; Columnn++) {
            // If the cell is empty
            if (Grid[Row][Columnn] === 0) {
                // Return the row and column
                return [Row, Columnn]
            }
        }
    }

    // If we didn't find any empty cells
    return [-1, -1]
}

// Check if the value is valid according to the sudoku rules
export function CheckValid(Grid: Array<Array<number>>, Row: number, Column: number, Value: number): boolean {
    // Check the rows
    for (let Index = 0; Index < Grid.length; Index++) {
        if (Grid[Row][Index] === Value) {
            return false
        }
    }

    // Check the columns
    for (let Index = 0; Index < Grid.length; Index++) {
        if (Grid[Index][Column] === Value) {
            return false
        }
    }

    // Check the sections
    const SectionRow = Math.floor(Row / 3) * 3
    const SectionColumn = Math.floor(Column / 3) * 3

    for (let Index = 0; Index < 3; Index++) {
        for (let Index2 = 0; Index2 < 3; Index2++) {
            if (Grid[SectionRow + Index][SectionColumn + Index2] === Value) {
                return false
            }
        }
    }

    // If we didn't find any problems
    return true
}