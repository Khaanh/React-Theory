import React, { useState, useRef, useEffect } from "react";
import Mouse from "./component/Mouse";
import Card from "./component/Card";
import "./App.css";

function App() {
  return (
    <Mouse
      render={(data) => {
        return (
          <p>
            {data.x} {data.y}
          </p>
        );
      }}
    />
  );
}

export default App;
