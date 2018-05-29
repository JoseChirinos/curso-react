import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './private-route';

import Loadable from 'react-loadable';
/* Este componente es el loading */
import Loader from '../../loader/loader';
import Login from '../../login/login';

/* Llamando al componente Home */
const Home = Loadable({
  loader: ()=> import('../../home/contenedor/home'), 
  loading: Loader
})
const Buscar = ()=>(
  <div>Estas en Buscar</div>
);

/* Llamando al componente Perfil */
const Perfil = Loadable({
  loader: ()=> import('../../perfil/contenedor/perfil'),
  loading: Loader
});

const notFound = ()=>(
  <div>404</div>
)

class RouterList extends Component{
  render(){
    return(
      <Router>
        <div>
          { this.props.children }
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route 
              path="/login"
              render={
                (props)=>{
                  return(
                  <Login handleLogin={ this.props.handleLogin } />
                )}
              }
            
            />
            <PrivateRoute path="/buscar" component={ Buscar } isAuth={ this.props.auth } />
            <PrivateRoute path="/perfil" component={ Perfil } isAuth={ this.props.auth } />
            <Route component={ notFound } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterList;