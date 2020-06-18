import React from "react";
import { ShareAndroidIcon } from "@primer/octicons-react";
import Logo2 from "../assets/images/png/TurBus-blanco.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-success">
        <span className="navbar-brand mb-0 h1">
          <img className="logo-header" src={Logo2} alt="hugrr" />
        </span>
        <span className="share-title"> share</span>
        <span className="share">
          <ShareAndroidIcon size={64} />
        </span>
      </nav>
    </header>
  );
}
