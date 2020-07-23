import React, { Component, Fragment } from "react";
import Imagen from "./Imagen";
export default class Resultado extends Component {
  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;
    if (imagenes.length === 0) return null;
    return (
      <Fragment>
        <div className="col-12 p-5 row">
          {imagenes.map((imagen) => (
            <Imagen key={imagen.id} imagen={imagen} />
          ))}
        </div>
      </Fragment>
    );
  };
  render() {
    return <Fragment>{this.mostrarImagenes()}</Fragment>;
  }
}
