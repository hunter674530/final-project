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
  console.log(user);
  return (
    <div className="App">
      <Login changeUser={changeUser} />
    </div>
  );
}

export default App;
