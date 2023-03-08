import React, { useState, useRef, useEffect, useCallback } from "react";
import UserCard from "./component/UserCard";
import "./App.css";

const users = [
  { id: 1, name: "Alex", surname: "Danchin" },
  { id: 2, name: "Michael", surname: "Pop" },
  { id: 3, name: "Artur", surname: "John" },
];
function App() {
  return (
    <div>
      <UserCard users={users[0]} onSendMessage={() => console.log(users[0])} />
      <UserCard users={users[1]} />
      <UserCard users={users[2]} />
    </div>
  );
}

export default App;
