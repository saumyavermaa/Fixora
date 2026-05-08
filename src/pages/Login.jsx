import React, { useState } from "react";

export default function Login({ setUser, setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return alert("Fill all fields");

    if (
      email === "admin@fixora.com" &&
      password === "admin123"
    ) {
      setRole("admin");
      setUser(true);
    } else {
      setRole("citizen");
      setUser(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-wrapper">

      <div className="login-card">

        {/* LOGO */}
        <div className="login-logo">
          <img
            src="/fixora-logo.png"
            alt="Fixora Logo"
          />
        </div>

        <div className="login-header">
          <h1>Welcome to Fixora</h1>
          <p>Smart Civic Complaint System</p>
        </div>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}