import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { createFunc } from "../../Serviços/serviçoFuncionario";
import './RegistroFuncionárioCSS.css'

function RegistroFuncionário() {

    const [registroFunc, setRegistroFunc] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const registerConfirmar = async () => {
        try {
            const { nome, email, senha } = registroFunc;
            await createFunc({ nome, email, senha });
            setRegistroFunc('');
        } catch (error) {
            alert('Impossível Realizar Cadatro')
        }
    }

    return (
        <div>
            <Header />
            <div className="formulario">
                <div>
                    <form className="registro-funcionario">
                        <label>Nome completo</label>

                        <br />

                        <input
                            type="text"
                            onChange={(e) => setRegistroFunc({ ...registroFunc, nome: e.target.value })}
                        />
                        
                        <br />
                        
                        <label>Email</label>
                        
                        <br />
                        
                        <input
                            type="text"
                            onChange={(e) => setRegistroFunc({ ...registroFunc, email: e.target.value })}
                        />
                        
                        <br />
                        
                        <label>Senha</label>
                        
                        <br />
                        
                        <input
                            type="text"
                            onChange={(e) => setRegistroFunc({ ...registroFunc, senha: e.target.value })}
                        />
                    </form>
                </div>
                 <div>
                    <button type="button" onClick={() => {registerConfirmar()}} > Confirmar </button>
                    <button type="button"> Cancelar </button>
                </div>
            </div>
        </div>
    );

}

export default RegistroFuncionário;