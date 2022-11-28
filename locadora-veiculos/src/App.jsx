import './App.css';
import Login from './Paginas/Login/Login';
import RegistroCliente from './Paginas/RegistroCliente/RegistroCliente';
import RegistroFuncionario from './Paginas/RegistroFuncionário/RegistroFuncionário';
import Cliente from './Paginas/Cliente/Cliente';
import Funcionario from './Paginas/Funcionario/Funcionario';
import RegistroCarro from './Paginas/RegistroCarro/RegistroCarro'
import Provider from './context/Provider';
import {Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={Login} />
        <Route exact path="/registroclientes" component={RegistroCliente} />
        <Route exact path="/registrofuncionarios" component={RegistroFuncionario} />
        <Route exact path="/cliente" component={Cliente} />
        <Route exact path="/funcionario" component={Funcionario} />
        <Route exact path="/registrocarros" component={RegistroCarro}/>
      </Provider>
    </Switch>
  );
}

export default App;
