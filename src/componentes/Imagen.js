import React from "react";

const Imagen = (props) => {
  const { largeImageURL, likes, views, previewURL, tags } = props.imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} art={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">Visto: {views} </p>

          <a
            href={largeImageURL}
            target="_black"
            className="btn btn-danger btn-block"
          >
            Bajar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
