import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Loadable from 'react-loadable';
/* Este componente es el loading */
import Loader from '../../loader/loader';

/* Llamando al componente Home */
const Home = Loadable({
  loader: ()=> import('../../home/contenedor/home'), 
  loading: Loader
})
/* llmando al component buscar */
const Buscar = Loadable({
  loader: ()=> import('../../buscar/contenedor/buscar'),
  loading: Loader
});

/* Llamando al componente Perfil */
const Perfil = Loadable({
  loader: ()=> import('../../perfil/contenedor/perfil'),
  loading: Loader
});

const notFound = ()=>(
  <div>404</div>
)

const RouterList = (props) => (
  <Router>
    <div>
      { props.children }
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/buscar" component={ Buscar } />
        <Route path="/perfil" component={ Perfil } />
        <Route component={ notFound } />
      </Switch>
    </div>
  </Router>
);

export default RouterList;