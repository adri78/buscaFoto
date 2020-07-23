import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
  };
  consultarApi = (e) => {
    const url = `https://pixabay.com/api/?key=9899510-8bf095613596cfea6ad2b3328&q=${this.state.termino}&per_page=10`;
    //console.log(url);

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino,
      },
      () => {
        // Lo transforma en un callback , cuando carga termino , dispara consultar api
        this.consultarApi();
      }
    );
  };
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"> Buscador de Imágenes </p>
          <Buscador datosBusqueda={this.datosBusqueda}></Buscador>
        </div>
        <Resultado imagenes={this.state.imagenes} />
      </div>
    );
  }
}

export default App;
