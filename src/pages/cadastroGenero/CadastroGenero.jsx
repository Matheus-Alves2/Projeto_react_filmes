import { useEffect, useState } from "react";
import api from "../../Services/services";

//Importar o sweet alert:
import Swal from 'sweetalert2'

// import { useEffect } from "react";

// importacao de componentes:
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { Await } from "react-router-dom";


const CadastroGenero = () => {
  //nome do genero
  const [genero, setGenero] = useState("");
  const [listaGenero, setListaGenero] = useState([]);
  const [excluiGenero, setExluirGenero] = useState();


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

  // vai acontecer depois que eu clicar no botao cadastrar
  async function cadastrarGenero(e) {
    e.preventDefault();
    //Verificar se o input esta vindo vazio
    if (genero.trim() != "") {
      //try => tentar(o esperado)
      //catch => pega a exceção
      try {
        //cadastrar um gênero: post
        await api.post("genero", { nome: genero })
        alerta("success", "Cadastro realizado com sucesso!")
        setGenero("")
      }
      catch (error) {
        alerta("error", "Erro! Entre em contato com o suporte!")
        console.log(error);
      }
    }
    else {
      alerta("error", "Erro! Campo vazio!")
    }

  }

  //sicrono => acontece simultaneamente
  //assicrono => Esperar algo/resposta para ir para outro bloco do
  async function listarGenero() {
    try {
      //await -> Aguarde ter uma resp da solicitacao
      const resposta = await api.get("genero");
      // console.log(resposta.data[3].idGenero)
      setListaGenero(resposta.data);
    } catch (error) {
      console.log(error);

    }
  }

  // funcao de excluir o genero;)

  async function excluirGenero(idDoGenero) {
    try {
      const excluir = await api.delete(`genero/${idDoGenero}`);
      
      // Animacao quando aperta o excluir
      setExluirGenero(excluir.data);
      const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: true
});
swalWithBootstrapButtons.fire({
  title: "Voce tem certeza?",
  text: "Nao vai ter volta!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Sim",
  cancelButtonText: "Nao",
  reverseButtons: true
}).then(async(result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Deletado!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelado",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});

          // --------------------------------- //
    } catch (error) {
      console.log(error);

    }
  }

  async function editarGenero(id) {
    const { value: novoGenero } = await Swal.fire({
    title: "Modifique seu Genero",
    input: "text",
    inputLabel: "Novo genero",
    inputValue: id. nome,
    showCancelButton: true,
    inputValidator: (value) => {
    if (!value) {
      return "O campo não pode estar vazio pequeno gafanhoto!";
    }
  }
});
if (novoGenero) {
  try {
    api.put(`genero/${genero.idDoGenero}`);
    Swal.fire(`O genero modificado ${novoGenero}`, {none: novoGenero});
  } catch (error) {
    console.log(error);
  }
}
  }

  //  //Teste
  //   useEffect(() => {
  //     console.log(genero);
  //   },[genero]);
  //   //Fim do teste


  // Assim que a pagina renderizar, o metodo listarGenero() sera chamado
  useEffect(() => {
    listarGenero()

  }, [listarGenero])





  return (
    
    <>
      <Header />
      <main>

        <Cadastro titulo="Cadastro de Genero"
          visibilidade="none"
          placeholder="Genero"


          valorInput = {filme}
          setValorInput = {setFilme}
          //Atribuindo a funcao:
          funcCadastro={cadastrarGenero}

          //Atribuindo a funcao que atualiza meu genero:
          valorSelect={genero}
          setValorSelect={setGenero}

        />

        <Lista titulo="Lista de Genero"
          visibilidade="none"

          //atribuir para lista, o meu estado atual:
          lista={listaGenero}
          funcEditar={editarGenero}
          onExcluir={excluirGenero}
        />

      </main>
      <Footer />
    </>

  )
}
export default CadastroGenero;