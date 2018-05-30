import React, { Component } from 'react';
import './card.css';

import Truncate from 'react-truncate';

class Card extends Component{

  render(){
    return(
      <div className={`card ${this.props.estilo}`} 
        ref = { this.props.referencia }
        style={
          { 
            width:"18rem", 
            display:"inline-block",
            margin: "20px 0px",
            transform: `translate3d(${this.props.positionX}px, 
                        ${ Math.abs(this.props.positionX * 0.12)}px,
                        0px)`,
            opacity: this.props.opacity
          }
        }
        >

        <div className="card-linker"></div>

        <img className="card-img-top" 
          src={`/assets/images/${this.props.picture}`} 
          alt={ this.props.title }
        />
        <div className="card-body">
          <h5 className="card-title">{ this.props.title }</h5>
          <h3>Edad: { this.props.edad }</h3>
          <div className="card-text">

            <Truncate
              lines={ 3 }
            >
              <p className="card-text">
                { this.props.description }
              </p>
            </Truncate>

          </div>

          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    );
  }
}

export default Card;