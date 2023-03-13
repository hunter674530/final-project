import React from "react";
import Ad from "./Ad";

function Ads({ ads, tags }) {
  return (
    <div className="Ads">
      <h1>Current Ads</h1>
      <h2>Filter by Tags</h2>
      {tags.map((tag) => (
        <button>{tag.name}</button>
      ))}
      {ads.map((ad) => (
        <Ad ad={ad} key={ad.id} />
      ))}
    </div>
  );
}
export default Ads;
