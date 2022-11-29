import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { createCliente } from "../../Serviços/serviçosCliente";
import './RegistroClienteCSS.css';

function RegistroCliente() {
    const [registroCliente1, setRegistroCliente1] = useState({
        nome: '',
        email: '',
        senha: '',
        carteiraMotorista: '',
    });

    const registerCliente = async () => {
        try {
            const { nome, email, senha, carteiraMotorista } = registroCliente1;
            await createCliente({ nome, email, senha, carteiraMotorista });
            setRegistroCliente1('');
        } catch (error) {
            
        }
    }

    return (
        <div>
            <Header />
            <br />
            <div className="formularioC">
                <div>
                    <form>
                        <label>Nome completo</label>
                        <br />
                        <input type="text"
                            onChange={(e) => setRegistroCliente1({ ...registroCliente1, nome: e.target.value })} />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="text"
                            onChange={(e) => setRegistroCliente1({ ...registroCliente1, email: e.target.value })} />
                        <br />
                        <label>Senha</label>
                        <br />
                        <input type="text"
                            onChange={(e) => setRegistroCliente1({ ...registroCliente1, senha: e.target.value })} />
                        <br />
                        <label>N° da carteira de motorista</label>
                        <br />
                        <input type="number"
                            onChange={(e) => setRegistroCliente1({ ...registroCliente1, carteiraMotorista: e.target.value })} />
                    </form>
            </div>
                <div>
                    <button type="button"
                        onClick={() => { registerCliente() }}
                    >
                        Confirmar
                    </button>
                    <button type="button"> Cancelar </button>
                </div>
            </div>
        </div>
            );

}

export default RegistroCliente;