import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Child.css";

export const Child = ({ onChange }) => {
  const [name, setName] = useState("");
  const handlerOnChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="child__main-container">
      <p>
        <i>Child component</i>
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
