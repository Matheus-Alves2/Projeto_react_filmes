import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
            <h1>{props.nomeLista}</h1>
            <hr/>

            <div className="tabela">
                <table>
                    {/* Cabeçalho da tabela: */}
                    <thead>
                        {/* tr => Table Row */}
                        <tr className="table_cabecalho"> 
                            {/* th => Table Head */}
                            <th> Nome </th>
                            <th style={{display:props.visi_lista}}> Gênero </th>
                            <th> Editar </th>
                            <th> Excluir </th>
                        </tr>
                    </thead>
                    {/* tbody => Corpo da Tabela */}
                    <tbody >
                        <tr className="item_lista">
                            <td data-cell="Nome"> xxxxxx </td>
                            <td data-cell="Gênero" style={{display:props.visi_lista}}> Terror </td>
                            <td data-cell="Editar"><img src={Editar} alt="" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;