import React from 'react';
import './AluguelComponentCSS.css';

function AluguelComponent({dataAluguel}) {

    return (
        <div className='cardAluguel'>
            <p>modelo</p>
            <p>ano</p>
            <p>valor</p>
            <p>cor</p>
            <p>Nome do Cliente</p>
            <div className="buttons-funcionario">
                    <button type="button" className="aprovar-button" id="button-aprovar"> Aprovar </button>
                    <button type="button" className="recusar-button" id="button-recusar"> Recusar </button>
            </div>
        </div>
    );
}

export default AluguelComponent;