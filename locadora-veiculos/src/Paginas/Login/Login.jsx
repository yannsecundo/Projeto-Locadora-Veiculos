import React from "react";

function Header() {
    return (
        <div>
            <form className="form-login">
                <h2 id='title-login'>Login</h2>
                <label id='label-email'>Email:</label>
                <br />
                <input className="input" type="text" name="email" ></input>
                <br />
                <label id='label-senha'>Senha:</label>
                <br />
                <input className="input" type="text" name="email" ></input>
                <br />
                <button
                    type="submit"
                    className="button-login"
                    id="submit-login"
                    onclick={() => { }}
                >
                    Entrar
                </button>
                <select id="select-login">
                    <option value="0">Cliente</option>
                    <option value="1">Funcionario</option>
                </select>
            </form>
        </div>
    );

}

export default Header;