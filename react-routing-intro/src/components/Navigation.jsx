import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
              
                </li>
                <li>
                    <Link to={'/about'}>Abaut</Link>
                </li>
                <li>
                    <Link to={'/datas'}>datas</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar