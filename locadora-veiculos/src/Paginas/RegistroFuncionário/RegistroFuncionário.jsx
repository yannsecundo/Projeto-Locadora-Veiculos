import React from "react";

function RegistroFuncionário() {
    return (
        <div>
            <form>
                <label>nome completo</label>
                <input type="text" />
                <label>email</label>
                <input type="text" />
                <label>senha</label>
                <input type="text" />
            </form>
            <button type="button" > Confirmar </button>
            <button type="button"> Cancelar </button>
        </div>
    );

}

export default RegistroFuncionário;