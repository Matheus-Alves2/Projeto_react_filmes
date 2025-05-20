// import { Fragment } from "react";
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import api from "../../Services/services";

const CadastroFilme = () => {

     function alerta(icone, mensagem) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: icone,
          title: mensagem
        });
      }

    const CadastroFilmes = () => {
        const [listaGenero, setListaGenero] = useState([]);
        const [genero, setGenero] = useState("");
        const [filme, setFilme] = useState("");

    async function CadastroFilme(e) {
        e.preventDefault();
        console.log(filme);
        console.log(genero);
        
        if(filme.trim() != ""){
            
            try {
                await api.post("filme", {titulo: filme, idGenero: genero});
            } catch (error) {
                console.log(error);
                alerta("sucess", "sucesso! Cadastro realizado com sucesso!")
                setFilme("");
                setGenero("");
                
        }
        }else{
            
            alert ("foi chamado o cadastrar filme")
        }

    }

        async function listaGenero(){
            try {
               const resposta = await api.get("genero");
               setListaGenero(resposta.data);
            } catch (error) {
                console.log(error);
                
            }
        }

        useEffect(()=>{
            listaGenero();
        }, []);
    }

    return(
        <>
         <Header/>
         <main>
            <Cadastro 
            tituloCadastro="Cadastro de Filme"
            campoPlaceholder="Filme"

            valorInput
            lista = {listaGenero}
            funcCadastro = {cadastrarFilme}
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