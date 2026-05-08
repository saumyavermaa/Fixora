import React from "react";
import Navbar from "../components/Navbar";

export default function CitizenDashboard({
  setPage,
  setUser,
  complaints = []
}) {
  const total = complaints.length;
  const pending = complaints.filter(c => c.status === "Pending").length;
  const resolved = complaints.filter(c => c.status === "Resolved").length;

  return (
    <div className="page">

      {/* ✅ FIXED NAVBAR (SAFE) */}
      <Navbar
        setPage={setPage}
        setUser={setUser}
        role="citizen"
      />

      <div className="content">

        {/* HERO */}
        <div className="hero">
          <h1>Citizen Portal</h1>
          <p>Transparent, real-time civic issue tracking</p>
        </div>

        {/* STATS */}
        <div className="grid">

          <div className="card stat-card">
            <h2>{total}</h2>
            <p>Total Complaints</p>
          </div>

          <div className="card stat-card">
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>

          <div className="card stat-card">
            <h2>{resolved}</h2>
            <p>Resolved</p>
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="grid">

          <div className="card action-card" onClick={() => setPage("raise")}>
            <h3>🚀 Quick Report</h3>
            <p>Raise a complaint in under 30 seconds</p>
          </div>

          <div className="card action-card" onClick={() => setPage("complaints")}>
            <h3>📋 Track Complaints</h3>
            <p>View status & progress in real time</p>
          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="feed-card">

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h2>Recent Activity</h2>

            <span style={{
              fontSize: "12px",
              opacity: 0.6,
              background: "rgba(255,255,255,0.05)",
              padding: "4px 10px",
              borderRadius: "20px"
            }}>
              Live Feed
            </span>
          </div>

          {complaints.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "30px 10px"
            }}>
              <div style={{ fontSize: "40px" }}>📝</div>
              <p style={{ marginTop: "10px", opacity: 0.7 }}>
                No complaints yet
              </p>

              <button
                onClick={() => setPage("raise")}
                style={{
                  marginTop: "14px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  background: "#60a5fa",
                  color: "#0b1220",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                + Raise Complaint
              </button>
            </div>
          ) : (
            <div className="complaint-scroll">

              {complaints.slice(0, 6).map((c, i) => (
                <div key={c.id} className="complaint-card">

                  <div className="mini-header">
                    <h4 style={{ fontSize: "14px" }}>
                      {c.title}
                    </h4>

                    <div className="badges">
                      <span className={`status ${c.status}`}>
                        {c.status}
                      </span>

                      <span className={`priority ${c.priority || "low"}`}>
                        {c.priority || "Low"}
                      </span>
                    </div>
                  </div>

                  <p className="desc" style={{ opacity: 0.75 }}>
                    {c.desc}
                  </p>

                  <div style={{
                    marginTop: "10px",
                    fontSize: "11px",
                    opacity: 0.5,
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                    <span>ID #{c.id}</span>
                    <span>{i === 0 ? "Just now" : `${i + 1} updates ago`}</span>
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

      {/* FLOATING BUTTON */}
      <button className="fab" onClick={() => setPage("raise")}>
        +
      </button>

    </div>
  );
}