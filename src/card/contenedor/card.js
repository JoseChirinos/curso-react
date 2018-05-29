import React, { Component } from 'react';

import Truncate from 'react-truncate';

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
        <img className="card-img-top" 
          src={`/assets/images/${this.props.picture}`} 
          alt={ this.props.title }
        />
        <div className="card-body">
          <h5 className="card-title">{ this.props.title }</h5>
          <h3>Edad: { this.props.edad }</h3>
          <Truncate
            lines={ 3 }
          >
            <p className="card-text">
              { this.props.description }
            </p>
          </Truncate>

          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    );
  }
}

export default Card;