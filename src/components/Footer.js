import { Link } from "react-router-dom";

function Footer() {
    return (
    <footer>
    <p>Copyright ©</p>
    
    <p><Link to ="/legal">Mentions légales</Link></p>
    </footer>
    );
}

export default Footer;