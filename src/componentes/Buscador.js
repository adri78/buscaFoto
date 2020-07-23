import React, { Component } from "react";

export default class Buscador extends Component {
  busquedaRef = React.createRef(); // Es un ref para leer el contenido de un input

  obtenerDatos = (e) => {
    e.preventDefault();
    // Tomo valoe input;
    const termino = this.busquedaRef.current.value;

    // Lo enviamois al componente Principal
    if (termino.length !== 0) this.props.datosBusqueda(termino);

    //  console.log(this.busquedaRef.current.value); //  Es el valor del input pasado x ref--> this.busquedaRef.current.value
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          {this.props.mensaje}
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              className="form-control form-control-lg"
              type="text"
              placeholder="Buscar ... "
            />
          </div>
          <div className="form-group col-md-4">
            <button
              className="btn btn-success btn-lg btn-block "
              type="submit"
              value="Buscar"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}
