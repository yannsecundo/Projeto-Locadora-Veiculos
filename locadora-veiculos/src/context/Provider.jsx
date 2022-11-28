import React from "react";
import { useMemo, useState } from "react";
import Context from "./Context";

function Provider({ children }) {

    const [login, setLogin] = useState({
        email: "",
        senha: "",
    });
    const [logado, setLogado] = useState({});
    const [valor, setValor] = useState('');

    const contextValue = useMemo(() => ({
        login,
        setLogin,
        logado,
        setLogado,
        valor,
        setValor,
    }), [login, logado, valor]);


    return (
        <Context.Provider value= {contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Provider;