import './App.css';
import Login from './Paginas/Login/Login';
import RegistroCliente from './Paginas/RegistroCliente/RegistroCliente';
import RegistroFuncionario from './Paginas/RegistroFuncionário/RegistroFuncionário';
import Cliente from './Paginas/Cliente/Cliente';
import Funcionário from './Paginas/Funcionario/Funcionario';
import Provider from './context/Provider';
import {Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={Login} />
        <Route exact path="/registroclientes" component={RegistroCliente} />
        <Route exact path="/registrofuncionario" component={RegistroFuncionario} />
        <Route exact path="/cliente" component={Cliente} />
        <Route exact path="/funcionario" component={Funcionário} />
      </Provider>
    </Switch>
  );
}

export default App;
