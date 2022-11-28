import React, { useContext } from "react";
import Context from "../../context/Context";
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    const { logado } = useContext(Context);
    const history = useHistory();

    return (
        <div className="header">
            <h2 id="titulo-header">Katapimbas</h2>
            <div className='logado'>
            {logado.cliente_nome ? <h3 id="cliente-name-header">{logado.cliente_nome}</h3> :
                <h3 id="funcionario-name-header">{ logado.funcionario_nome }</h3>
            }
            <button
                className="button-logout"
                type="button"
                id="button-logout"
                onClick={() => {history.push('/')}}
            >
                Sair
                </button>
            </div>

        </div>
    );

}

export default Header;