import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Home = ()=>(
  <div>Estas en el Home</div>
);
const Buscar = ()=>(
  <div>Estas en Buscar</div>
);
const Perfil = ()=>(
  <div>
    <h1>Mi Perfil</h1>
  </div>
);
const notFound = ()=>(
  <div>404</div>
)

const RouterList = (props) => (
  <Router>
    <div>
      { props.children }
      <Switch>
        <Route path="/" component={ Home } />
        <Route path="/buscar" component={ Buscar } />
        <Route path="/perfil" component={ Perfil } />
        <Route component={ notFound } />
      </Switch>
    </div>
  </Router>
);

export default RouterList;