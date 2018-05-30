import React, { Component } from 'react';
import './buscar-touch.css';
import Hammer from 'react-hammerjs';

/* components */
import Card from '../../card/contenedor/card';
import mascotas from '../../data/dogs.json';

class BuscarTouch extends Component{
  constructor(props){
    super(props);
    this.card = React.createRef();
  }

  state = {
    mensaje:'',
    mascotaIndex: 0,
    positionX:0,
    opacity:1,
    touchFinal:true
  }
  moviendoCard = (e)=>{
    console.log(e.isFinal);

    if(e.isFinal){
      this.card.current.className = "card Card-touch animated";
      this.setState({
        positionX:0,
        opacity:1,
        touchFinal:true
      });
      setTimeout(()=>{
        this.card.current.className = "card Card-touch";
      },500);
    }else{
      if(Math.abs(e.deltaX)>200){
        if(this.state.touchFinal){
          if(this.state.mascotaIndex+1>9){
            this.card.current.className = "card Card-touch animated";
            this.setState( (prevState)=> {
              return {
                mensaje:'eso fue todo',
                touchFinal:false,
                positionX:0,
                opacity:1,
                mascotaIndex: 0
              }
            })
            setTimeout(()=>{
              this.card.current.className = "card Card-touch";
            },500);
          }
          else{
            this.card.current.className = "card Card-touch animated";
            this.setState( (prevState)=> {
              return {
                touchFinal:false,
                positionX:0,
                opacity:1,
                mascotaIndex: prevState.mascotaIndex + 1
              }
            });
            setTimeout(()=>{
              this.card.current.className = "card Card-touch";
            },500);
          }
        }
      }else{
        this.setState({
          positionX: e.deltaX,
          opacity: (100 - (Math.abs(e.deltaX) / 2) ) / 100
        })
      }
    }

  }
  render(){
    console.log(mascotas[0]);
    return(
      <div className="BuscarTouch">
        <div className="TouchZone">
          <h1> Estas en en { this.state.mascotaIndex}</h1>
          <h3>{ this.state.mensaje }</h3>
          
          <Hammer
            onPan={ this.moviendoCard }
            direction = 'DIRECTION_HORIZONTAL'
          >

            <div className="Card-touch">
              <Card
                referencia = { this.card }
                positionX = { this.state.positionX }
                opacity = { this.state.opacity }
                estilo='Card-touch'
                { ...mascotas[this.state.mascotaIndex] }
              />
            </div>

          </Hammer>


        </div>
      </div>
    )
  }
}

export default BuscarTouch;