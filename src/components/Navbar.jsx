import React from "react";

export default function Navbar({ setPage, setUser, role }) {
  const handleLogout = () => {
    if (typeof setUser === "function") {
      setUser(false);
    } else {
      console.warn("setUser not passed to Navbar");
    }
  };

  return (
    <div className="navbar">

      <div className="nav-left">
        <h2>Fixora ⚡</h2>
      </div>

      <div className="nav-center">

        {role === "citizen" && (
          <>
            <button onClick={() => setPage?.("home")}>Home</button>
            <button onClick={() => setPage?.("complaints")}>My Complaints</button>
          </>
        )}

        {role === "admin" && (
          <button onClick={() => setPage?.("home")}>Dashboard</button>
        )}

      </div>

      <div className="nav-right">
        <button className="logout" onClick={handleLogout}>
          Sign Out
        </button>
      </div>

    </div>
  );
}