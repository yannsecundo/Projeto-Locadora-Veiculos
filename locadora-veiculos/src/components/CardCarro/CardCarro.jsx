import React, { useContext } from 'react';
import Context from "../../context/Context";
import './CardCSS.css';

function CardCarro({dataCarro}) {
    const { logado } = useContext(Context);
    return (
        <div className='cardCarro'>
            <p>{dataCarro.carro_nome}</p>
            <p>{ dataCarro.carro_modelo }</p>
            <p>{ dataCarro.carro_ano }</p>
            <p>{dataCarro.carro_status}</p>
            <p>{dataCarro.carro_valor}</p>
            {dataCarro.carro_status === 'DISPONIVEL'?
                <button type='button' className='button-alugar'> Solicitar Aluguel </button> :
                <button type='button' className='button-indisponivel' disabled> Carro Indisponível </button>
            }
        </div>
    );
}

export default CardCarro;