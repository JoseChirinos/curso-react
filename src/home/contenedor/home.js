import React, { Component } from 'react';
import Card from '../../card/contenedor/card';
import mascotas from '../../data/dogs.json';

class Home extends Component{
  render(){
    return(
      <div className="Home">
        <div className="container">
          <div className="row justify-content-center">

            {
              mascotas.map( (mascota)=>{
                return (
                  <div className="col-md-4 col-xs-12">
                    <Card
                      {...mascota}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>        
      </div>
    )
  }
}

export default Home;
