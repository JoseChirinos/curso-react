import React, { Component } from 'react';

import PerfilMenu from '../componentes/perfil-menu'
import PerfilContenido from '../componentes/perfil-contenido';


class Perfil extends Component{
  render(){
    return(
      <section className="Perfil">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <PerfilMenu/>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <PerfilContenido/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Perfil;