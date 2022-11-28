import React from "react";
import Header from "../../components/Header/Header";

function RegistroCarro() {
    return (
        <div>
            <Header />
            <br />
            <form>
                <label>Modelo</label>
                <input type="text" />
                <label>Ano</label>
                <input type="number" />
                <label>Marca</label>
                <input type="text" />
            </form>
            <button type="button" > Confirmar </button> 
            <button type="button"> Cancelar </button>
        </div>
    );

}

export default RegistroCarro;