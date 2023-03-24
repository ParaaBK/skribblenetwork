import { Solve } from './Solver'
import RandomSeed from 'random-seed'

// This function will remove cells from the grid until the difficulty(0-100) is met
export function Traceback(Grid: Array<Array<number>>, Seed: string, Difficulty: number): Array<Array<number>> {
    // Setup the random seed
    const RandomGen = RandomSeed.create(Seed)

    // Make a copy of the grid
    const NewGrid = JSON.parse(JSON.stringify(Grid)) // I know it stupid. Probably a better way to do this

    // Make a list of all the cells we have checked
    const CheckedCells: Array<Array<number>> = []

    // Get the number of cells to remove
    const CellsToRemove = Math.floor((Difficulty / 100) * (Grid.length * Grid.length))
    let CellsRemoved = 0

    // While we are still removing cells
    while (CellsRemoved < CellsToRemove) {
        // Get a random cell
        const Row = RandomGen(Grid.length)
        const Column = RandomGen(Grid.length)

        // If the cell is empty or we have already checked it
        if (NewGrid[Row][Column] === 0 || CheckedCells.find(Cell => Cell[0] === Row && Cell[1] === Column)) {
            // Are all the cells checked?
            if (CheckedCells.length === (Grid.length * Grid.length)) {
                break
            }

            continue
        }

        // Add the cell to the checked cells
        CheckedCells.push([Row, Column])

        // Save the value of the cell
        const OldValue = NewGrid[Row][Column]

        // Set the cell to empty
        NewGrid[Row][Column] = 0

        // Check if the grid is still valid
        const Solutions = Solve(JSON.parse(JSON.stringify(NewGrid))) // I know it stupid. Probably a better way to do this

        if (Solutions === 1) {
            CellsRemoved++
        } else {
            NewGrid[Row][Column] = OldValue
        }
    }

    return NewGrid;
}