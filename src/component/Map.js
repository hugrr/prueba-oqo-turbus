import React from "react";
import imageMap from "../assets/images/png/mapa.png";

export default function Map() {
  return (
    <div className="cardMap row">
      <div className="col">
        <div className="map btn btn-secondary  bg-success border border-success">
          {" "}
          <p className="maptitle">Seleccionar Destino</p>
        </div>

        <div className="box">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p className="espacio">Título CES 1</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 2</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 3</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 4</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 5</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 6</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 7</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 8</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 9</p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <p>Título CES 10</p>
          </div>
        </div>
      </div>

      <div className="imagenMap ">
        <img className="img" src={imageMap} alt="hugrr" />
      </div>
    </div>
  );
}
