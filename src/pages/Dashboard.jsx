import React from "react";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import ActivityFeed from "../components/ActivityFeed";
import Notifications from "../components/Notifications";

export default function Dashboard({ setPage, setUser }) {
  return (
    <div className="page">

      {/* NAVBAR (IMPORTANT FIX) */}
      <Navbar setPage={setPage} setUser={setUser} />

      <Notifications />

      <div className="content">

        {/* HERO SECTION */}
        <div className="hero">
          <h1>Welcome to Fixora ⚡</h1>
          <p>Smart Civic Complaint Management System</p>
        </div>

        {/* COUNTERS */}
        <div className="counter-grid">
          <Counter label="Total Complaints" target={120} color="#60a5fa" />
          <Counter label="Resolved" target={80} color="#34d399" />
          <Counter label="Pending" target={40} color="#fbbf24" />
        </div>

        {/* FEATURE CARDS */}
        <div className="grid" style={{ marginTop: "30px" }}>
          <div className="card">📍 Location Tracking</div>
          <div className="card">🧠 AI Classification</div>
          <div className="card">🔄 Real-time Updates</div>
          <div className="card">📊 Analytics Dashboard</div>
        </div>

        {/* ACTIVITY FEED */}
        <div className="dashboard-bottom">
          <ActivityFeed />
        </div>

      </div>
    </div>
  );
}