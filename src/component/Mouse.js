import React, { useCallback, useState, useRef } from "react";

function Mouse(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handlerMouseMover = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return <div onMouseMove={handlerMouseMover}>{props.render({ x, y })}</div>;
}

export default Mouse;
