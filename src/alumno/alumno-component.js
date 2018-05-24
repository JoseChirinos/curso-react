import React, { Component } from 'react';
import './alumno-component.css';

/*importando imagenes */
import Logo from '../logo.svg';

class AlumnoComponent extends Component{
  render(){
    return(
      <div className="Alumno">
        <img 
          src={ Logo } 
          alt=""
        />
        <h1>Nombre</h1>
        <p>Direccion</p>
        <span>Edad</span>
      </div>
    );
  }
}

export default AlumnoComponent;