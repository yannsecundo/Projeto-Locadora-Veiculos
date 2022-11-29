import React from "react";
import { Link } from 'react-router-dom'
import './Funcionario.css';
import Header from "../../components/Header/Header";
import AluguelComponent from "../../components/Aluguel/AluguelComponent";

function Funcionario() {
    // logado
    return (
        <div>
            <Header />
            <h2>Página do funcionário</h2>
            <Link to="/registrocarro"> Registrar Veiculo </Link>
            <div className="tabela-alugueis">
                <AluguelComponent />
            </div >
        </div>
    );

}

export default Funcionario;