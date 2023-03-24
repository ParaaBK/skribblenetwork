import { Traceback } from './Modules/Backtracing'
import { SetupGrid, OpenSelector, MouseLeaveSelector, InputNumber, ResetCell } from './Modules/Interactions'
import './Sudoku.css'

function Sudoku() {
    const Grid: Array<Array<number>> = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ]

    let StartTime = Date.now()
    let NewGrid = Traceback(Grid, Date.now().toString(), 100)
    console.log(`Generated in: ${Date.now() - StartTime} milliseconds`)

    SetupGrid(Grid)

    return (
        <div className="sudoku">
            <table id='sudoku-table'>
                <tbody>
                    {NewGrid.map((row, i) => (
                        <tr key={i}>
                            {row.map((col, j) => (
                                <td key={j}>
                                    <button data-x={i} data-y={j} className='cell' onClick={OpenSelector} onContextMenu={ResetCell} disabled={(col > 0)}>{(col > 0) ? col : undefined}</button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div id='number-selector' onMouseLeave={MouseLeaveSelector}>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={InputNumber}>1</button></td>
                            <td><button onClick={InputNumber}>2</button></td>
                            <td><button onClick={InputNumber}>3</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={InputNumber}>4</button></td>
                            <td><button onClick={InputNumber}>5</button></td>
                            <td><button onClick={InputNumber}>6</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={InputNumber}>7</button></td>
                            <td><button onClick={InputNumber}>8</button></td>
                            <td><button onClick={InputNumber}>9</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sudoku
