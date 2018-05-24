import React, { Component } from 'react';

class CursoComponent extends Component
{
  state = {
    nombre: this.props.nombre
  }
  /* al instanciar el Componente */
  constructor(props){
    super(props);
    console.log('estas el componente Curso');
    /* creamos una referencia */
    this.textInput = React.createRef();
  }
  /* antes de renderizar */
  componentWillMount(){
    console.log('esto es antes que de renderear');
  }

  /* despues de renderizar */
  componentDidMount(){
    console.log('despues de renderizar');
  }

  cambiarNombre = (e)=> {
    //console.log(this.textInput.current.value);
    this.setState({
      nombre: this.textInput.current.value
    });
  }
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>
          { this.state.nombre }
        </h1>
        <h2>
          { this.props.carrera }
        </h2>
        <hr/>
        <input 
          type="text" 
          ref = { this.textInput }
          className="form-control"
          placeholder="Inserte Nuevo Nombre"
          />
        <button 
          className="btn btn-primary"
          onClick={ this.cambiarNombre } >
          Cambiar Nombre
        </button>
      </div>
    )
  }
}
export default CursoComponent;
