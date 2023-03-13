import React from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Ads from "./Ads";
import MyPage from "./MyPage";

function App() {
  return (
    <div className="App">
      <Home />
      <Ads />
      <MyPage />
    </div>
  );
}

export default App;
