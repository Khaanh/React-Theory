import React from "react";
import "./App.css";

const style = {
  color: "red",
  fontSize: "36px",
  backgroundColor: "green",
  padding: "18px",
};

function App() {
  return (
    <>
      <h1 style={style} className="h1-title">
        Hello app-react !
      </h1>
    </>
  );
}

export default App;
