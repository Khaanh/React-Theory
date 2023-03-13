import { useState } from "react";
import Child from "../Child";
import "./Parent.css";

export const Parent = () => {
  const [name, setName] = useState("");
  const handlerOnChange = (name) => {
    setName(name);
  };
  return (
    <div className="parent__main-container">
      <p>
        <i>Parent component</i>
      </p>
      <span>Name is: {name}</span>

      <Child onChange={handlerOnChange} />
    </div>
  );
};
