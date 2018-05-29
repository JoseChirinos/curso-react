import React, { Component } from 'react';

import RouterList from '../componentes/router-list';

class RouterApp extends Component{
  render(){
    return(
      <RouterList 
        auth={ this.props.auth }
        handleLogin = { this.props.handleLogin }
      >
        { this.props.children }
      </RouterList>
    );
  }
}

export default RouterApp;