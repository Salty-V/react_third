import ProfilMenu from './ProfilMenu';

function Header() {
    return (
    <header>
    <h1>Titre</h1>
    <nav>
        <ul>
            <li>Home</li>
            <li>Produits</li>
            <li>Contact</li>
            <ProfilMenu />
        </ul>
    </nav>
    </header>
    );
}

export default Header;