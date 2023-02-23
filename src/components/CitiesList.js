import { useState } from "react";

export default function CitiesList(props) {
  const [cities, setCities] = useState([
    { name: "Харьков", description: "Первая столица Украины" },
    { name: "Киев", description: "Столица Украины" },
  ]);

  return (
    <ul>
      {cities.map((city) => (
        <li key={city}>{city.name}</li>
      ))}
    </ul>
  );
}
