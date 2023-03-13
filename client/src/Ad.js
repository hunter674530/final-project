import React from "react";
import { Link } from "react-router-dom";

function Ad({ ad }) {
  return (
    <div>
      <h2>{ad.name}</h2>
      <Link to={`/ad/${ad.id}`}>
        <img src={ad.image} alt="product/service" />
      </Link>
      <p>{ad.description}</p>
      <h3>${ad.price}</h3>
    </div>
  );
}
export default Ad;
