import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const nameInputRef = useRef();
  const surnameInputRef = useRef();

  const handlerKeyUp1 = (e) => {
    if (e.key === "Enter") {
      surnameInputRef.current.focus();
    }
  };
  const handlerKeyUp2 = (e) => {
    if (e.key === "Enter") {
      nameInputRef.current.focus();
    }
  };

  return (
    <form>
      <input
        ref={nameInputRef}
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handlerKeyUp1}
      />
      <br />
      <input
        ref={surnameInputRef}
        type="text"
        placeholder="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        onKeyUp={handlerKeyUp2}
      />
    </form>
  );
}

export default App;
