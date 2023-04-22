import React, { useEffect, useState } from "react";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  return (
    <div className="container px-6 mx-auto">
      {vans.map((van, i) => (
        <div key={i} className="">
          Name: {van.name}, Price: {van.price}
        </div>
      ))}
    </div>
  );
}
