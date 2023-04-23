import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  function cardColor(type = "") {
    switch (type) {
      case "simple":
        return "bg-orange-600";
      case "rugged":
        return "bg-green-900";
      case "luxury":
        return "bg-slate-950";
    }
  }

  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-6 gap-y-7">
      {vans.map((van, i) => (
        <div key={i}>
          <Link to={`/vans/${van.id}`}>
            <div className="flex flex-col gap-2 cursor-pointer">
              <img src={van.imageUrl} alt={van.name} className="rounded-md" />
              <div className="flex justify-between">
                <div className="font-bold">{van.name}</div>
                <div>
                  <span className="font-bold">${van.price}</span> / day
                </div>
              </div>
              <div>
                <div
                  className={`${cardColor(
                    van.type
                  )} w-fit px-3 py-1 text-orange-100 font-medium rounded capitalize`}
                >
                  {van.type}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
