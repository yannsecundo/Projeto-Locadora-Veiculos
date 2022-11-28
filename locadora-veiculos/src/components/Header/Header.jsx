import React, { useContext } from "react";
import Context from "../../context/Context";
import './Header.css';

function Header() {
    const { logado } = useContext(Context);

    return (
        <div className="header">
            <h2 id="titulo-header">Katapimbas</h2>
            <h3 id="cliente-name-header">{logado.cliente_nome}</h3>
            <button
                className="button-logout"
                type="button"
                id="button-logout"
            >
                Sair
            </button>

        </div>
    );

}

export default Header;