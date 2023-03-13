import logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((newUser) => setUser(newUser));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  console.log(user);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        {errors.map((err) => (
          <h1>{err}</h1>
        ))}
      </form>
    </div>
  );
}

export default App;