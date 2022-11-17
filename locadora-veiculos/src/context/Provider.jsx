import React from "react";
import { useMemo, useState } from "react";
import Context from "./Context";

function Provider({ children }) {

    const [data, setData] = useState([]);
    
    const contextValue = useMemo(() => ({
        data,

    }), [data])
    return (
        <Context.Provider value= {contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Provider;