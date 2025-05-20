import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="">Nome</label>
                        <input type="text" 
                        name="nome" 
                        placeholder={`Digite o nome do ${props.campoPlaceholder}`} 
                        value={props.valorInput}
                        //Ao mudar o input algo tem que acontecer:
                        // Atuliazar o estado do pai ao digitar
                        //Target esta indo buscar o valor do "e"
                        onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>
                    <div className="campo_cad_genero" style={{display:props.visibilidade}}>
                        <label htmlFor="genero">Gênero</label>
                        <select name="genero" id=""
                        value={props.ValorSelect}
                        onChange={(e) => props.setValorSelect}>
                            <option  value="" disabled selected>Selecione</option>
                            {props.lista && props.lista.length> 
                            0 && props.map((itemGenero)
                            <Option value={itemGenero.idGenero}>{itemGenero.nome}</Option>

                            <option value="">op 1</option>
                            <option value="">op 2</option>
                            <option value="">op 3</option>
                            
                            )}
                        </select>
                    </div>
                    <Botao nomeDoBotao="Cadastrar"/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;