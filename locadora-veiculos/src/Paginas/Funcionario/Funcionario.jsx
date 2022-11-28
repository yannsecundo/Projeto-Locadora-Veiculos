import React from "react";
import './Funcionario.css';
import Header from "../../components/Header/Header";

function Funcionario() {
    return (
        <div>
            <Header />
            <h2>Página do funcionário</h2>
            <div>
                <table>
                    <tr>
                        <th> modelo </th>
                        <th> ano </th>
                        <th> valor </th>
                        <th> periodo </th>
                        <th> nome cliente </th>
                    </tr>
                    <tr>
                        <td> gol </td> 
                        <td> 2010 </td>
                        <td> 200 </td>
                        <td> 5 </td>
                        <td> Cliente2 </td>

                    </tr>
                </table>
                    <button type="button" className="button-aprovar"> aprovar </button>
            </div>
        </div>
    );

}

export default Funcionario;