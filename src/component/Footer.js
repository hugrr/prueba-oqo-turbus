import React from "react";
import logoGreen from "../assets/images/png/TurBus.png";
import {
  LocationIcon,
  DeviceMobileIcon,
  MailIcon,
} from "@primer/octicons-react";

export default function Footer() {
  return (
    <div>
      <div className="footer bg-dark ">
        <div className="row footer-info">
          <div className="col-1"></div>
          <div className="col-3 footer-info">
            <span>
              <img className="logo" src={logoGreen} alt="hugrr" />
            </span>
            <div className="footer-infostart">
              <p className="title-logo">Empresa de Transportes Rurales Ltda.</p>

              <div className="row icon">
                &nbsp; &nbsp;
                <LocationIcon size={24} />
                &nbsp;
                <p>
                  Dirección: Jesús Diez Martínez 800,<br></br> Estacion Central,
                  Santiago de Chile.
                </p>
              </div>
              <div className="row">
                &nbsp; &nbsp;
                <DeviceMobileIcon size={26} />
                &nbsp;
                <p>Telefono 228227500</p>
              </div>
              <div className="row">
                &nbsp; &nbsp;
                <MailIcon size={25} />
                &nbsp; &nbsp;
                <p>Email: atencion_clientes@turbus.cl</p>
              </div>
            </div>
          </div>
          <div className="col-3 footer-infocenter ">
            <p className="title-footer-center">Más sobre Tur Bus Ltda</p>
            <br></br>
            <p>Historia </p>
            <p>Trabaje con nosotros</p>
            <p>Condiciones</p>
          </div>
          <div className="col-3 footer-infoend ">
            <p className="title-footer-end">Más sobre Tur Bus Ltda</p>

            <p>Venta de pasajes</p>
            <p>Aeropuerto</p>
            <p>Recarga de celular</p>
            <p>Venta de buses</p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
