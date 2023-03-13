import React from "react";
import Ad from "./Ad";
import { useState, useEffect } from "react";

function Ads({ ads, tags }) {
  const [selectedTagId, setSelectedTagId] = useState(null);

  const handleTagClick = (tagId) => {
    if (tagId === selectedTagId) {
      setSelectedTagId(null); // toggle selected tag off
    } else {
      setSelectedTagId(tagId); // set new selected tag
    }
  };

  const filteredAds = selectedTagId
  ? ads.filter((ad) => ad.tag_id === selectedTagId)
  : ads;

  return (
    <div className="Ads">
      <div id="centerColumn">
      <h1>Current Ads</h1>
      </div>
      <div id="leftColumn">
      <h2>Filter by Tags</h2>
      {tags.map((tag) => (
        <button key={tag.id} onClick={() => handleTagClick(tag.id)}>
          {tag.name}
          </button>
      ))}
      </div>
      <div id="centerColumn">
      {filteredAds.map((ad) => (
        <Ad ad={ad} key={ad.id} />
      ))}
      </div>
    </div>
  );
}
export default Ads;
