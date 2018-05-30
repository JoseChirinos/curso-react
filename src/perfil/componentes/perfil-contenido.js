import React from 'react';
import Card from '../../card/contenedor/card';

import mascotas from '../../data/dogs.json';

console.log(mascotas);

const PerfilContenido = (props)=>(
  <div className="PerfilContenido">
    <div className="row justify-content-center">
      <div className="col-md-6 col-xs-12">
        {
          mascotas.map( (mascota,index)=>{
            return (
              <Card
                key = { index }
                title= { mascota.title}
                description = { mascota.description }
                picture = { mascota.picture }
                edad = { mascota.edad }
              />
            )
          })
        }
      </div>
    </div>
  </div>
);

export default PerfilContenido;