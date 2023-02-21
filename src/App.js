import React from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const handlerSecondClick = (e) => {
    console.log("handlerSecondClick");
  };

  const handlerMouseLeave = (e) => {
    console.log("Mouse Leave");
  };

  const handlerMouseEnter = (e) => {
    console.log("Mouse Enter");
  };

  const handlerClick = (e) => {
    console.log("Click");
  };

  return (
    <Button
      secondClick={handlerSecondClick}
      onClick={handlerClick}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      Новый текст
    </Button>
  );
}

export default App;
