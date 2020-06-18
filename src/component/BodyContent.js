import React from "react";
import imageCenter from "../assets/images/png/Sin título-15.png";

export default function BodyContent() {
  return (
    <div className="body text-center">
      <img className="img" src={imageCenter} alt="hugrr" />
      <div className=" turclub">
        <button type="button" className=" turclub-button btn btn-success ">
          <h2>Ir a Tur Club</h2>
        </button>
        <div className="turclub-h1">
          <h2>Nuestros destinos en el programa de viajero frecuente</h2>
        </div>
      </div>
    </div>
  );
}
