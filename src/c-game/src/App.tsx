import './App.css'
import Sudoku from './Components/Sudoku/Sudoku'
import MainHeader from './Components/parts/header'

function AppGame() {
  return (
    <div className="App">
      {/* <MainHeader /> */}
      <Sudoku />
    </div>
  );
}

export default AppGame
