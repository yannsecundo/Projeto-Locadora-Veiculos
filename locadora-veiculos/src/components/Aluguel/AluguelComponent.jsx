import React from 'react';
import { deletAluguel } from '../../Serviços/serviçoAluguel';
import { attCarro } from '../../Serviços/serviçoCarro';
import './AluguelComponentCSS.css';

function AluguelComponent({dataAluguel, alugueis}) {

    const aprovar = async () => {
        await attCarro(dataAluguel.carro_id)
        alugueis();
    }

    const deletar = async () => { 
        await deletAluguel(dataAluguel.aluguel_id)
        alugueis();
    }



    return (
        <div className='cardAluguel'>
            <label>Modelo: </label>
            <br />
            <p>{dataAluguel.carro.carro_modelo}</p>
            <br />
            <label>Ano: </label>
            <br />
            <p>{dataAluguel.carro.carro_ano}</p>
            <br />
            <label>Valor: </label>
            <br />
            <p>{dataAluguel.carro.carro_valor}</p>
            <br />
            <label>Cliente: </label>
            <br />
            <p>{dataAluguel.cliente.cliente_nome}</p>
                {dataAluguel.carro.carro_status === 'DISPONIVEL' &&
                    <div className="buttons-funcionario">
                        <button type="button" className="aprovar-button" id="button-aprovar" onClick={() => { aprovar() }}> Aprovar </button>
                        <button type="button" className="recusar-button" id="button-recusar" onClick={() => {deletar()}}> Recusar </button>
                    </div>
                }
        </div>
    );
}

export default AluguelComponent;