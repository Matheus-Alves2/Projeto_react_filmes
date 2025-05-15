import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/services";
import Swal from 'sweetalert2';
const CadastroGenero = () => {

    //nome do genero
    const [genero, setGenero] = useState("");

    function alerta(icone, mensagem){
    
    }

    async function cadastrarGenero(e){
        e.preventDefault();
        //Verificar se o input esta vindo vazio
        //Comedia Romantica
        if(genero.trim() === ""){
            try{
                //cadastrar um genero: post
                await api.post("genero",{nome: genero});
                alerta("Sucess macho", "Cadastro reaizado com sucesso!😁")
                alert("");
                setGenero()
            }catch(error){
                alerta("sucess", "Erro macho! Entre em contato com o suporte!😭")
                console.log(error);
            }     
        }else{
            
        }

        //try => tentar(o esperado)
        //catch => pega a execao
    }

    //Teste validar o genero
    //useEffect(<function>, <dependency>)
    //useEffect(() => {
        //console.log(genero);
    //},[genero]);

    //fim do teste

    return(
       <>
            <Header/>
            <main>
                <Cadastro 
                tituloCadastro="Cadastro de Gênero"
                visibilidade="none"
                campoPlaceholder="Gênero"
                //Atribuindo a funcao:
                funcCadastro={cadastrarGenero}
                //Atribuindo o valor ao input:
                valorInput={genero}
                //Atribuindo a funcao que atualiza o meu genero:
                setValorInput={setGenero}
                />
                <Lista
                 nomeLista="Lista de Gênero"
                 visi_lista="none"
                 />
            </main>
            <Footer/>
       </>
    )
}

export default CadastroGenero;