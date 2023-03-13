import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ad from "./Ad";
import NavBar from "./NavBar";

function AdDetails() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);
  const [ads, setAds] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/ads")
      .then((r) => r.json())
      .then(setAds);
  }, []);

  


  useEffect(() => {
    const selectedAd = ads.find((ad) => ad.id === Number(id));
    setAd(selectedAd);
  }, [ads, id]);

  if (!ad) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <NavBar />
      <h2>{ad.name}</h2>
      <p>{ad.description}</p>
      <img src={ad.image} alt="product/service" />
      <h3>${ad.price}</h3>
    </div>
  );
}

export default AdDetails;