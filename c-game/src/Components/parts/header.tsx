import './header.css'
import Logo from '../../Components/Images/Logo.svg'

function MainHeader() {
    return (
        <header>
            <a href="/App"><img src={Logo} alt="Logo Sudoku with friends" /></a>
        </header>
    )
}

export default MainHeader
