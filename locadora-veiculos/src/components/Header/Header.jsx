import React, { useContext } from "react";
import Context from "../../context/Context";
import './Header.css';

function Header() {
    const { logado } = useContext(Context);

    return (
        <div className="header">
            <h2>Header</h2>
            <p>{ logado.cliente_nome }</p>

        </div>
    );

}

export default Header;