import { useState } from "react";

export default function RecursiveButton(props) {
  let [showMode, setShowMode] = useState(false);

  return (
    <>
      <button onClick={() => setShowMode(!showMode)}>
        Покажи/Скрой следующий контент
      </button>

      <br />
      {showMode ? <RecursiveButton /> : null}
    </>
  );
}
