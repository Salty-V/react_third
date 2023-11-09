import ProfilMenu from './ProfilMenu';

function Header() {
    return (
    <header>
    <nav>
    <h1>Titre</h1>
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