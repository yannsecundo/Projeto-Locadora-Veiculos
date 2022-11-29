import React, { useContext } from 'react';
import Context from "../../context/Context";
import { createAluguel } from '../../Serviços/serviçoAluguel';
import './CardCSS.css';

function CardCarro({dataCarro}) {
    const { logado } = useContext(Context);

    const solicitar = async () => {
        try {
            const { cliente_id } = logado;
            const { carro_id } = dataCarro;
            const obj = {
                carroId: carro_id,
                clienteId: cliente_id
            };
           await createAluguel(obj)
        } catch (error) {
            alert('Erro na solicitação');
        }
    }    


    return (
        <div className='cardCarro'>
            <p>{dataCarro.carro_nome}</p>
            <p>{ dataCarro.carro_modelo }</p>
            <p>{ dataCarro.carro_ano }</p>
            <p>{dataCarro.carro_status}</p>
            <p>{dataCarro.carro_valor}</p>
            {dataCarro.carro_status === 'DISPONIVEL'?
                <button type='button' className='button-alugar'
                    onClick={() => { solicitar() }}> Solicitar Aluguel </button> :
                <button type='button' className='button-indisponivel' disabled> Carro Indisponível </button>
            }
        </div>
    );
}

export default CardCarro;