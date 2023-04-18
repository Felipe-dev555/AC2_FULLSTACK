import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Carros from './Carros';
import './style.css'

function App() {
  return (
      <>
      <header className="App-header">
        <p> <Link to='/home'>HOME</Link></p>
        <p><Link to='/carros'>Tipos de Carros</Link></p>
      </header>

      <main>
        <Switch>
          <Route path='/home' component= {Home}/>
          <Route path='/carros' component= {Carros}/>
        </Switch>
      </main>
      </>

  );
}

export default App;
