import React, { useReducer, useState, useContext } from "react";
import ActionsCard from "./component/ActionsCard";
import StatusCard from "./component/StatusCard";
import Context from "./component/Context";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const count = (n) => setCounter(counter + n);
  const value = {
    counter,
    count,
  };

  return (
    <Context.Provider value={value}>
      <div className="container">
        <StatusCard />
        <ActionsCard />
      </div>
    </Context.Provider>
  );
}

export default App;
