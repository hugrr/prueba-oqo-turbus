import React from "react";

import "./App.css";

import Footer from "./component/Footer";

import Map from "./component/Map";
import Header from "../src/component/Header";
import BodyContent from "./component/BodyContent";

function App() {
  return (
    <div>
      <Header />
      <BodyContent />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
