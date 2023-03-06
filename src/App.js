import React, { useState, useRef, useEffect, useCallback } from "react";
import Mouse from "./component/Mouse";
import Card from "./component/Card";
import "./App.css";

function App() {
  const ref = useRef();

  const handlerClick = useCallback(() => {
    console.log(ref.current.value);
  }, [ref]);

  return (
    <div>
      <input ref={ref} />
      <button onClick={handlerClick}>Отправить</button>
    </div>
  );
}

export default App;
