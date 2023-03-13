import React from "react";
import { Link } from "react-router-dom";

function EditAd({ ad, removeAd }) {
  function handleDelete() {
    fetch(`/ads/${ad.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((oldAd) => removeAd(oldAd));
  }
  return (
    <div>
      <h2>{ad.name}</h2>
      <Link to={`/ad/${ad.id}`}>
        <img src={ad.image} alt="product/service" />
      </Link>
      <p>{ad.description}</p>
      <h3>${ad.price}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default EditAd;
