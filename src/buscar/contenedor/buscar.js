import React, { Component } from 'react';

/*components */
import BuscarTouch from '../componentes/buscar-touch';

class Buscar extends Component {
  render(){
    return(
      <div className="Buscar">
        <BuscarTouch/>
      </div>
    );
  }
}

export default Buscar;