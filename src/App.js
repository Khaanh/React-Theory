import React, { useState } from "react";
import "./App.css";

import CitiesList from "./components/CitiesList";
import City from "./components/City";

function App(props) {
  return (
    <>
      <City />
      <CitiesList />
    </>
  );
}

export default App;
