import React from "react";
import { Link } from 'react-router-dom'
import './Funcionario.css';
import Header from "../../components/Header/Header";

function Funcionario() {
    return (
        <div>
            <Header />
            <h2>Página do funcionário</h2>
            <Link to="/registrocarro"> Registrar Veiculo </Link>
            <div className="tabela-funcionario">
                <table>
                    <tr>
                        <th> modelo </th>
                        <th> ano </th>
                        <th> valor </th>
                        <th> cor </th>
                        <th> nome cliente </th>
                    </tr>
                    <tr>
                        <td> gol </td> 
                        <td> 2010 </td>
                        <td> preto </td>
                        <td> 5 </td>
                        <td> Cliente2 </td>

                    </tr>
                </table>
                <div className="buttons-funcionario">
                    <button type="button" className="aprovar-button" id="button-aprovar"> Aprovar </button>
                    <button type="button" className="recusar-button" id="button-recusar"> Recusar </button>
                </div>
            </div>
        </div>
    );

}

export default Funcionario;