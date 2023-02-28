import React, { useEffect, useState } from "react";
import "./App.css";

// import City from "./components/City";
// import CitiesList from "./components/CitiesList";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSeatch] = useState("");

  useEffect(() => {
    fetch("/users?search=" + search)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, [search]);

  return <p>Hello useEffect!</p>;
}

export default App;
