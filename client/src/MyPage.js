import React from "react";
import { useState, UseEffect } from "react";
import Ad from "./Ad";

function MyPage({ ads, user, tags, addAd }) {
  const [formErrors, setFormErrors] = useState([]);
  const [tagId, setTagId] = useState(24);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [filteredAds, setFilteredAds] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      user_id: user.id,
      tag_id: tagId,
      name: name,
      description: description,
      image: image,
      price: parseInt(price),
    };
    fetch("/ads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newAd) => {
          addAd(newAd);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tagId">Tag:</label>
        <select
          id="tagId"
          name="tagId"
          value={tagId}
          onChange={(e) => setTagId(e.target.value)}
        >
          <option value="">Select a tag</option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        <label htmlFor="pizza_id">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="pizza_id">Name:</label>
        <input
          type="string"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="pizza_id">Description:</label>
        <input
          type="string"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="pizza_id">Image:</label>
        <input
          type="string"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {formErrors.length > 0
          ? formErrors.map((err) => (
              <p key={err} style={{ color: "red" }}>
                {err}
              </p>
            ))
          : null}
        <button type="submit">Add To Ads</button>
      </form>
    </div>
  );
}

export default MyPage;
