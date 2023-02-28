import { useState } from "react";

export default function City(props) {
  const [indexCurrent, setIndexcurrent] = useState(0);

  const city = props.cities[props.indexCurrent];

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea
        value={city.description}
        onChange={(e) => props.onChangeCity(props.indexCurrent, e.target.value)}
      ></textarea>
    </div>
  );
}
