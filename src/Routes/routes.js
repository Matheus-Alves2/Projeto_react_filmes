import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            {/*http://localhost:3000/ => login */}
            <Route path="/" element = {<Login/>} exact/>
            {/*http://localhost:3000/Filme => Cadastro FIlme */}
            <Route path="/Filme" element = {<CadastroFilme/>}/>
            {/*http://localhost:3000/Genero => Cadastro Gênero */}
            <Route path="/Genero" element = {<CadastroGenero/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;