import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function EditAd({ ad, removeAd, tags, userId, changeAd }) {
  const [tagId, setTagId] = useState(ad.tag);
  const [name, setName] = useState(ad.name);
  const [description, setDescription] = useState(ad.description);
  const [image, setImage] = useState(ad.image);
  const [price, setPrice] = useState(ad.price);

  function handleDelete() {
    fetch(`/ads/${ad.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((oldAd) => removeAd(oldAd));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      user_id: userId,
      tag_id: tagId,
      name: name,
      description: description,
      image: image,
      price: parseInt(price),
    };
    fetch(`/ads/${ad.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((changedAd) => {
          changeAd(changedAd);
        });
      }
    });
  }
  return (
    <div>
      <h2>Change Ad: {ad.name}</h2>
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
        <button type="submit">Edit Ad</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default EditAd;
