import React from "react";
import Header from "../../components/Header/Header";

function RegistroCliente() {
    return (
        <div>
            <Header />
            <br />
            <form>
                <label>nome completo</label>
                <input type="text" />
                <label>email</label>
                <input type="text" />
                <label>senha</label>
                <input type="text" />
                <label>N° da carteira de motorista</label>
                <input type="number" />
            </form>
            <button type="button" > Confirmar </button>
            <button type="button"> Cancelar </button>
        </div>
            );

}

export default RegistroCliente;