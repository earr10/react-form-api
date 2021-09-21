import './App.css';
import Formulario from './components/Formulario';
import { Component } from 'react';
import Registros from './components/Registros';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cabecera from './components/Cabecera';

class App extends Component{
  render(){
    return (
      <Router>
      <div className="App">
        <Cabecera/>
      <Switch>
      <Route path="/Formulario">
          <Formulario/>
        </Route>
        <Route path="/Registros">
          <Registros/>
        </Route>
      </Switch>
      </div>
    </Router>
      
    );
  }
}

export default App;