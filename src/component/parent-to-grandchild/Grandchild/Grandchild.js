import { useContext } from "react";
import { Context } from "../context";

import "./Grandchild.css";

export const Grandchild = ({ name }) => {
  return (
    <div className="grandchild__main-container">
      <p>
        <i>Grand child Component</i>
      </p>

      <span>Name is: {name}</span>
    </div>
  );
};
