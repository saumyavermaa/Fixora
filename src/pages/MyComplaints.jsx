import React from "react";
import Navbar from "../components/Navbar";

export default function MyComplaints({
  setPage,
  setUser,        // ✅ ADD THIS
  complaints = []
}) {
  return (
    <div className="page">

      {/* ✅ FIXED NAVBAR */}
      <Navbar
        setPage={setPage}
        setUser={setUser}
        role="citizen"
      />

      <div className="content">

        <h2>My Complaints</h2>

        {complaints.length === 0 ? (
          <div className="card">No complaints yet</div>
        ) : (
          complaints.map((c) => (
            <div className="card" key={c.id}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <p><b>Status:</b> {c.status}</p>
            </div>
          ))
        )}

      </div>
    </div>
  );
}