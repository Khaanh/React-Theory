import React, { useState, useRef, useEffect } from "react";
import useOne from "./component/useOne";
import useCounter from "./component/useCounter";
import "./App.css";

// function App() {
//   const [counter, count] = useState(0);

//   useOne(() => {
//     console.log("Один раз");
//   }, []);

//   return (
//     <button
//       onClick={() => {
//         count(counter + 1);
//       }}
//     >
//       Click: {counter}
//     </button>
//   );
// }

function App() {
  const { counter, count } = useCounter(0);

  useOne(() => {});
  return <button onClick={() => count(counter + 1)}>Click: {counter}</button>;
}
export default App;
