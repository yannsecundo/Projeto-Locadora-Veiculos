import React, { useContext, useState } from "react"; 
import { useHistory } from 'react-router-dom';
import Context from "../../context/Context";
import { loginCliente } from "../../Serviços/serviçosCliente";
import { loginFuncionario } from "../../Serviços/serviçoFuncionario";

function Login() {
    const [selected, setSelected] = useState("1");
    const { login, setLogin } = useContext(Context);
    const { setLogado } = useContext(Context);



    const history = useHistory();

    const item = [
        { id: 1, name: 'Cliente' },
        { id: 2, name: 'Funcionário' },
    ];
    const registerChange = (e) => {
        if (selected === '1') {
        history.push('/registroclientes')
        } if (selected === '2') {
        history.push('/registrofuncionarios')
        }
    };

    const loginChange = async (e) => {
        if (selected === '1') {
            try {
                const { email, senha } = login; 
                const {data} = await loginCliente({ email, senha });
                setLogado(data);
                setLogin('');
                history.push('/cliente')   
            } catch (error) {
                alert(error.response.data)
            }
        } if (selected === '2') { 
            try {
                const { email, senha } = login;
                const { data } = await loginFuncionario({ email, senha });
                setLogado(data);   
                setLogin('');
                history.push('/funcionario')
            } catch (error) {
                alert(error.response.data)
            }
            
        }
    }

    return (
        <div>
            <form className="App">
                <h2 id='title-login'>Login</h2>
                <label id='label-email'>Email:</label>
                
                <br />
                
                <input
                    className="input"
                    type="text"
                    name="email"
                    value={login.email}
                    onChange={(e) => setLogin({...login, email: e.target.value})}
                ></input>
                
                <br />
                
                <label id='label-senha'>Senha:</label>
                
                <br />
                
                <input
                    className="input"
                    type="text"
                    name="senha"
                    value={login.senha}
                    onChange={(e) => setLogin({...login, senha: e.target.value})}
                ></input>
                
                <br />
                
                <button
                    type="button"
                    className="button-login"
                    id="submit-login"
                    onClick={() => { loginChange() }}
                >
                    Entrar
                </button>
                <select id="select-login" value={selected} onChange={e => setSelected(e.target.value)}>
                    {item.map((i, index) => (
                        <option value={i.id}>{i.name}</option>
                    ))}
                </select>
            </form>
            <button
                type="button"
                id="button-register"
                onClick={() => { registerChange() }}
            >
                Register
            </button>
        </div>
    );

}

export default Login;