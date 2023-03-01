import React, { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment": {
      return { counter: state.counter + action.payload };
    }
    case "decrement": {
      return { counter: state.counter - action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 1,
          })
        }
      >
        -1
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 2,
          })
        }
      >
        -2
      </button>

      <span>{state.counter}</span>

      <button
        onClick={() => {
          dispatch({
            type: "increment",
            payload: 1,
          });
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          dispatch({
            type: "increment",
            payload: 2,
          });
        }}
      >
        +2
      </button>
    </div>
  );
}
export default App;
