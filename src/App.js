import React, { useState, useRef, useEffect, useCallback } from "react";
import Mouse from "./component/Mouse";
import Card from "./component/Card";
import "./App.css";

const ENTER = "Enter";

function App() {
  const ref = useRef();
  const clickHandler = useCallback((e) => {
    console.log(ref.current.value);
  });

  const keyUpHandler = useCallback((e) => {
    const { key } = e;
    if (key === ENTER) {
      clickHandler();
    }
  });

  useEffect(
    (e) => {
      if (ref.current) {
        ref.current.addEventListener("keyup", keyUpHandler);

        return () => {
          ref.current.removeEventListener("keyup", keyUpHandler);
        };
      }
    },
    [keyUpHandler]
  );

  return (
    <div>
      <input ref={ref} />
      <button onClick={clickHandler}>Send</button>
    </div>
  );
}

export default App;
