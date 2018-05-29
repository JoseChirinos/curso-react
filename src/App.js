import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* components */
import RouterApp from './router/contenedor/router-app';
import Menu from './menu/contenedor/menu';

class App extends Component {
  render() {
    return (
      <RouterApp>
        <Menu/>
      </RouterApp>
    );
  }
}
      
export default App;
