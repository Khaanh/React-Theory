import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

// import City from "./components/City";
// import CitiesList from "./components/CitiesList";

// function createUser(name, surname) {
//   const user = { name, surname };

//   console.log(user);

//   return user;
// }

// function App() {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [counter, setCounter] = useState(0);
//   const user = useMemo(() => createUser(name, surname), [name, surname]);

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>
//         На меня нажали {counter} раз
//       </button>
//       <br />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         value={surname}
//         onChange={(e) => setSurname(e.target.value)}
//       />
//       <br />

//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
// }

function App() {
  const [message, setMessage] = useState("Всем привет");
  const [counter, setCounter] = useState(0);

  const greeting = useCallback((text) => {
    console.log(text);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      На меня нажали {counter} раз
    </button>
  );
}

export default App;
