import React, { Component } from 'react';

class Card extends Component{

  render(){
    return(
      <div className="card" 
        style={
          { 
            width:"18rem", 
            display:"inline-block",
            margin: "20px 0px"
          }
        }>
        <img className="card-img-top" src="/assets/images/perrito.jpg" alt="Perrito Chapita en adopción"/>
        <div className="card-body">
          <h5 className="card-title">Perrito Chapita en Adopción</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    );
  }
}

export default Card;