import React, { useState } from "react";
import Content from "./components/Content";
import RecursiveButton from "./components/RecursiveButton";
import "./App.css";

function List(props) {
  return (
    <li>
      {props.users.name} {props.users.surname}
    </li>
  );
}

function App() {
  let users = [
    { id: 1, name: "Alex", surname: "Volkonvskiy" },
    { id: 2, name: "Islam", surname: "Makhachev" },
    { id: 3, name: "Jone", surname: "Johns" },
    { id: 4, name: "Connor", surname: "MacCgregor" },
    { id: 5, name: "Alex", surname: "Pereira" },
    { id: 6, name: "Jorj", surname: "Sent-Pier" },
  ];

  const handlerClick = (user) => {
    console.log(`${user.name} ${user.surname}`);
  };

  let lis = users.map((user, index) => {
    let even = (index + 1) % 2 === 0;
    let style = null;

    if (even) {
      style = {
        color: "white",
        background: "black",
      };
    }

    return (
      <li key={user.id} style={style} onMouseEnter={() => handlerClick(user)}>
        {user.id} --- {user.name} {user.surname}
      </li>
    );
  });

  return <ul>{lis}</ul>;
}

export default App;
