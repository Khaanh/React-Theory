import React from "react";
import Mouse from "./Mouse";

const cardStyle = {
  height: "100px",
  border: "1px solid black",
  margin: "5px",
};

const Card = (props) => {
  return (
    <Mouse
      render={({ x, y }) => (
        <div style={cardStyle}>
          {x}: {y}
        </div>
      )}
    />
  );
};

export default Card;
