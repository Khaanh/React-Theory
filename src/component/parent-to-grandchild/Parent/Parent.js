import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";

import { Context } from "../context";
import Child from "../Child";
import "./Parent.css";

export const Parent = () => {
  const [name, setName] = useState("");
  const handlerOnChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="parent__main-container">
      <p>
        <i>Parent Component</i>
      </p>

      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handlerOnChange}
          />
        </Form.Group>
      </Form>

      <Child name={name} />
    </div>
  );
};
