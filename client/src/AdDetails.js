import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ad from "./Ad";

function AdDetails({ ads }) {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const selectedAd = ads.find((ad) => ad.id === Number(id));
    setAd(selectedAd);
  }, [ads, id]);

  if (!ad) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{ad.name}</h2>
      <p>{ad.description}</p>
      <img src={ad.image} alt="product/service" />
      <h3>${ad.price}</h3>
    </div>
  );
}

export default AdDetails;