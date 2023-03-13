import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Ads from "./Ads";
import MyPage from "./MyPage";

function App() {
  const [user, setUser] = useState({});
  const [ads, setAds] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("/ads")
      .then((r) => r.json())
      .then(setAds);
  }, []);
  useEffect(() => {
    fetch("/tags")
      .then((r) => r.json())
      .then(setTags);
  }, []);
  console.log(ads);

  function changeUser(newUser) {
    setUser(newUser);
  }
  function addAd(newAd) {
    setAds([...ads, newAd]);
  }

  console.log(user);
  return (
    <div className="App">
      <Home changeUser={changeUser} />
      <Ads ads={ads} tags={tags} />
      <MyPage ads={ads} user={user} tags={tags} addAd={addAd} />
    </div>
  );
}

export default App;
