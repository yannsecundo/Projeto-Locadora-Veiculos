import React from 'react';
import './CardCSS.css';

function CardCarroFuncionario({dataCarro, handleDelete}) {
    return (
        <div className='cardCarro'>
            <p>{dataCarro.carro_nome}</p>
            <p>{ dataCarro.carro_modelo }</p>
            <p>{ dataCarro.carro_ano }</p>
            <p>{dataCarro.carro_status}</p>
            <p>{dataCarro.carro_valor}</p>
            <button
                type='button'
                className='button-indisponivel'
                onClick={() => {handleDelete(dataCarro.carro_id)}}
            >
                Excluir
            </button>

        </div>
    );
}

export default CardCarroFuncionario;