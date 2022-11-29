import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Funcionario.css';
import Header from "../../components/Header/Header";
import AluguelComponent from "../../components/Aluguel/AluguelComponent";
import { getAluguel } from "../../Serviços/serviçoAluguel";

function Funcionario() {
    const [ dataAluguel, setDataAluguel ] = useState([]);

    const alugueis = async () => {
        try {
            const { data } = await getAluguel();
            setDataAluguel(data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    useEffect(() => {
        alugueis()
    },[])

    return (
        <div>
            <Header />
            <h2>Página do funcionário</h2>
            <Link to="/registrocarro"> Registrar Veiculo </Link>
            <div className="tabela-alugueis">
                {dataAluguel.map((dataAluguel) => <AluguelComponent dataAluguel={dataAluguel} alugueis={alugueis} />)}
            </div >
        </div>
    );

}

export default Funcionario;