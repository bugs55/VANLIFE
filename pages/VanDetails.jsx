import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetails() {
  const [vanData, setVanData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVanData(data.vans);
      });
  }, []);

  return <div className="container">VanDetails</div>;
}
