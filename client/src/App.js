import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Login from "./Login";
import Ads from "./Ads";


function App() {
  const [user, setUser] = useState({});

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

      <Login changeUser={changeUser} />

    </div>
  );
}

export default App;
