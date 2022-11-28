import React from "react";
import './RegistroCarroCSS.css';
import Header from "../../components/Header/Header";

function RegistroCarro() {
    return (
        <div>
        <Header />
        <div className='form-carro'>
                <br />
                <form>
                    <label>Modelo</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Ano</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Marca</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Valor</label>
                    <br />
                    <input type="text"></input>
                </form>
                <div className='button-carro-registro'>
                    <button type="button" id='confirmar-button'> Confirmar </button> 
                    <button type="button" id='cancelar-button'> Cancelar </button>
                </div>
            </div>
        </div>
    );

}

export default RegistroCarro;