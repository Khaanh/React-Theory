import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Sibling1.css";

export const Sibling1 = ({ onChange }) => {
  const handlerOnChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="sibling1__main-container">
      <p>
        <i>Sibling 1</i>
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
    </div>
  );
};
