import React, { useState } from "react";
import "./App.css";

import City from "./components/City";
import CitiesList from "./components/CitiesList";

function App() {
  const [cities, setCities] = useState([
    { name: "Киев", description: "Столица Украины" },
    { name: "Харьков", description: "Первая столица Украины" },
  ]);
  const [indexCurrent, setIndexcurrent] = useState(0);

  const handlerChangeCity = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === n) {
          return {
            ...city,
            description,
          };
        }
        return city;
      })
    );
  };

  const handlerSelectCity = (index) => setIndexcurrent(index);

  return (
    <>
      <City
        cities={cities}
        onChangeCity={handlerChangeCity}
        indexCurrent={indexCurrent}
      />
      <CitiesList cities={cities} onSelectCity={handlerSelectCity} />
    </>
  );
}

export default App;
