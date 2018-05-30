import React, { Component } from 'react';
import Card from '../../card/contenedor/card';
import mascotas from '../../data/dogs.json';

class Home extends Component{
  render(){
    return(
      <div className="Home">
          
          <div className="card-columns text-center">

            {
              mascotas.map( (mascota, index)=>{
                return (
                    <Card
                      key = { index }
                      {...mascota}
                    />
                )
              })
            }
          </div>

      </div>
    )
  }
}

export default Home;
