import React, { useState } from "react";
import "./App.css";

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       date: new Date(),
//     };

//     setInterval(() => {
//       this.setState((state, props) => ({
//         date: new Date(),
//         count: state.count + 1,
//       }));
//     }, 1000);
//   }

//   render() {
//     return (
//       <>
//         <p>{this.state.count}</p>
//         <h1>{this.state.date.toLocaleString()}</h1>;
//       </>
//     );
//   }
// }

function Welcome(props) {
  let [date, setDate] = useState({
    date: new Date(),
  });

  setInterval(() => {
    setDate({
      date: new Date(),
    });
  }, 100);

  return <h1>{date.date.toLocaleString()}</h1>;
}
function App() {
  return <Welcome />;
}

export default App;
