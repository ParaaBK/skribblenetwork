let CompletedGrid: Array<Array<number>> = [];

export function SetupGrid(Grid: Array<Array<number>>){
    CompletedGrid = Grid;
}

export function ResetCell(Event: React.MouseEvent<HTMLElement>) {
    // Cancel the default event
    Event.preventDefault()

    // Get the cell button
    const CellButton = Event.currentTarget as HTMLButtonElement

    // Set the cell button text
    CellButton.innerText = ''

    // Remove the open class from all the cell buttons
    document.querySelectorAll('.cell.open').forEach(Element => Element.classList.remove('open'))

    // Get the selector element
    const Selector = document.getElementById('number-selector') as HTMLDivElement

    // Hide the selector
    Selector.style.display = 'none'
}

export function OpenSelector(Event: React.MouseEvent<HTMLElement>) {
    // Remove the open class from all the cell buttons
    document.querySelectorAll('.cell.open').forEach(Element => Element.classList.remove('open'))

    // Get the cell button
    const CellButton = Event.currentTarget as HTMLButtonElement

    // Add the open class to the cell button
    CellButton.classList.add('open')

    // Get the cell button position
    const CellButtonPosition = CellButton.getBoundingClientRect()

    // Get the selector element
    const Selector = document.getElementById('number-selector') as HTMLDivElement

    // Set the selecter display
    Selector.style.display = 'inline-block'
    Selector.style.position = 'absolute'

    // Set the selector position
    Selector.style.top = `${CellButtonPosition.top + window.scrollY - (Selector.clientWidth / 4)}px`
    Selector.style.left = `${CellButtonPosition.left + window.scrollX - (Selector.clientHeight / 4)}px`
}

export function MouseLeaveSelector(Event: React.MouseEvent<HTMLElement>) {
    // Remove the open class from all the cell buttons
    document.querySelectorAll('.cell.open').forEach(Element => Element.classList.remove('open'))

    // Hide the selector
    Event.currentTarget.style.display = 'none'
}

export function InputNumber(Event: React.MouseEvent<HTMLElement>) {
    // Get the cell button
    const CellButton = document.querySelector('.cell.open') as HTMLButtonElement

    // Get the number button
    const NumberButton = Event.currentTarget as HTMLButtonElement

    // Set the cell button text
    CellButton.innerText = NumberButton.innerText

    // Remove the open class from all the cell buttons
    document.querySelectorAll('.cell.open').forEach(Element => Element.classList.remove('open'))

    // Get the selector element
    const Selector = document.getElementById('number-selector') as HTMLDivElement

    // Hide the selector
    Selector.style.display = 'none'

    // Check if the input was correct
    const CellX = parseInt(CellButton.dataset.x as string)
    const CellY = parseInt(CellButton.dataset.y as string)
    const CellValue = parseInt(CellButton.innerText)

    console.log(CompletedGrid[CellX][CellY], CellValue)

    if (CompletedGrid[CellX][CellY] === CellValue) {
        CellButton.classList.add('correct')
        CellButton.classList.remove('incorrect')
    } else {
        CellButton.classList.add('incorrect')
        CellButton.classList.remove('correct')
    }
}

// function GetArrayFromTable(): Array<Array<number>> {
//     // Get the table
//     const Table = document.getElementById('sudoku-table') as HTMLTableElement

//     // Get the table rows
//     const TableRows = Table.querySelectorAll('tr')

//     // Create the grid
//     const Grid: Array<Array<number>> = []

//     // Loop thru the table rows
//     TableRows.forEach((TableRow, RowIndex) => {
//         // Get the table cells
//         const TableCells = TableRow.querySelectorAll('td')

//         // Create the row
//         const Row: Array<number> = []

//         // Loop thru the table cells
//         TableCells.forEach((TableCell, ColumnIndex) => {
//             // Get the cell button
//             const CellButton = TableCell.querySelector('button') as HTMLButtonElement

//             // Get the cell button text
//             const CellButtonText = CellButton.innerText

//             // Get the cell button number
//             const CellButtonNumber = CellButtonText === '' ? 0 : parseInt(CellButtonText)

//             // Add the cell button number to the row
//             Row.push(CellButtonNumber)
//         })

//         // Add the row to the grid
//         Grid.push(Row)
//     })

//     return Grid;
// }