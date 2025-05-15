import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                {/*Estou a redeirecionar ao clickar na logo */}
            <Link to="/">
            <img src={Logo} alt="Logo do Filmoteca" />
            </Link>
            <nav className="nav_header">
              <Link to="/Filme" className="link_header" href="">Filme</Link>
              <Link to="/Genero" className="link_header" href="">Gênero</Link>
            </nav>

            </div>
        </header>
    )
}
export default Header;