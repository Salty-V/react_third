import ProfilMenu from './ProfilMenu';
import { Link } from "react-router-dom";


function Header() {
    return (
    <header>
    <nav>
    <h1>Titre</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Produits</Link></li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <Link to="/resume"><ProfilMenu /></Link>
        </ul>
    </nav>
    </header>
    );
}

export default Header;