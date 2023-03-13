import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Login from "./Login";
import Ads from "./Ads";
import Home from "./Home";


function App() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);

  function changeUser(newUser) {
    setUser(newUser);
    setUserId(newUser.id);
  }

  return (
    <div className="App">
      <Home userId={userId} changeUser={changeUser} />
    </div>
  );
}

export default App;
