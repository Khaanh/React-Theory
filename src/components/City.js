import { useState } from "react";

export default function City(props) {
  const [cities, setCities] = useState([
    { name: "Харьков", description: "Первая столица Украины" },
    { name: "Киев", description: "Столица Украины" },
  ]);

  let city = cities[0];

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea value={city.description}></textarea>
    </div>
  );
}
