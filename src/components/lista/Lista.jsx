import "./Lista.css"

//Importacao de imagems:
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
    return (
        <section className="layout_grid listagem">
            <h1>{props.titulo}</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* cabecalho da tabela: */}
                    <thead>
                        {/* tr => table row */}
                        <tr className="table_cabecalho">
                            {/* th => table head*/}
                            <th>Nome</th>
                            <th style={{ display: props.visibilidade }}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>
                        {/* verificar se a lista esta vindo vazia */}
                        {props.lista && props.lista.length > 0 ? (
                            // vamos mapear os itens da lista
                            props.lista.map((item) => (
                                <tr className="item_lista" key={item.idGenero}>

                                    <td data-cell="Nome">
                                        {item.nome}
                                    </td>
                                    <td data-cell="Genero" style={{ display: props.visibilidade }}>Acao</td>
                                    <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                                    <td data-cell="Excluir"> 
                                       
                                        <img src={Excluir} alt="Lixeira" onClick={() => props.onExcluir(item.idGenero)} style={{cursor:"pointer"}}/>
                                       
                                    </td>

                                </tr>
                            ))
                        )
                            : (
                                <p>Nenhum genero foi encontrado.</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;