// import { Fragment } from "react";
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return(
        <>
         <Header/>
         <main>
            <Cadastro 
            tituloCadastro="Cadastro de Filme"
            campoPlaceholder="Filme"
            />
            <Lista 
            nomeLista="Lista de Filme"
            />
          </main>
         <Footer/>
        </>
    )
}
 export default CadastroFilme;