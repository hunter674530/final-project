import React from "react";
function Ad({ ad }) {
  return (
    <div>
      <h2>{ad.name}</h2>
      <p>{ad.description}</p>
      <img src={ad.image} alt="product/service" />
      <h3>${ad.price}</h3>
    </div>
  );
}
export default Ad;
