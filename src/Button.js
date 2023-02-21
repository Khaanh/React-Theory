import { useState } from "react";

export default function Button(props) {
  let [counter, setCounter] = useState(0);

  const handlerClick = () => {
    setCounter(counter + 1);

    // if (counter > 2) {
    //   props.secondClick();

    //   // props.handlerClick();
    // }
  };

  return (
    <button {...props} onClick={handlerClick}>
      Click: {counter} {props.children}
    </button>
  );
}
