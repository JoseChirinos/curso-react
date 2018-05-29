import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* components */
import RouterApp from './router/contenedor/router-app';
import Menu from './menu/contenedor/menu';

/* auth */
import firebase, { auth, provider } from './firebase/firebase';

class App extends Component {
  state = {
    currentItem: '',
    username: '',
    items: [],
    user: null, // <-- add this line
    auth: false
  }
  login = ()=>{
    auth.signInWithPopup(provider) 
    .then((result) => {      
      const user = result.user;
      this.setState({
        user,
        auth:true
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <RouterApp 
        auth={
          this.state.auth
        }
        handleLogin = { this.login }
      >
        <Menu
          {...this.state}
        />
      </RouterApp>
    );
  }
}
      
export default App;
