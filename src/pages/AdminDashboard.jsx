import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";

export default function AdminDashboard({
  complaints = [],
  setComplaints,
  setUser
}) {
  const [filter, setFilter] = useState("All");

  // ================= STATUS UPDATE =================
  const updateStatus = (id, status) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status } : c
      )
    );
  };

  // ================= FILTER =================
  const filtered = useMemo(() => {
    return complaints.filter((c) =>
      filter === "All" ? true : c.status === filter
    );
  }, [complaints, filter]);

  // ================= PRIORITY SORT =================
  const sorted = useMemo(() => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };

    return [...filtered].sort(
      (a, b) =>
        (priorityOrder[b.priority || "Low"] -
         priorityOrder[a.priority || "Low"])
    );
  }, [filtered]);

  return (
    <div className="page">

      {/* ✅ FIXED NAVBAR */}
      <Navbar
        setUser={setUser}
        role="admin"
      />

      <div className="content">

        {/* HERO */}
        <div className="hero">
          <h1>Admin Dashboard</h1>
          <p>All citizen complaints in one place</p>
        </div>

        {/* FILTERS */}
        <div className="nav-center">
          {["All", "Pending", "Resolved", "Rejected"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "active-filter" : ""}
            >
              {f}
            </button>
          ))}
        </div>

        {/* EMPTY STATE FIX */}
        {sorted.length === 0 ? (
          <div className="card">
            <h3>No complaints found</h3>
            <p style={{ opacity: 0.6 }}>
              Try changing filter or wait for new complaints
            </p>
          </div>
        ) : (

          <div className="table-wrapper">

            <table className="admin-table">

              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Assigned</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {sorted.map((c) => (
                  <tr key={c.id}>

                    <td><b>{c.title}</b></td>

                    <td style={{ opacity: 0.75 }}>
                      {c.desc}
                    </td>

                    <td>
                      <span className={`status-badge ${c.status}`}>
                        {c.status}
                      </span>
                    </td>

                    <td>
                      <span className={`priority-badge ${c.priority || "Low"}`}>
                        {c.priority || "Low"}
                      </span>
                    </td>

                    <td>
                      {c.assignedTo || "Unassigned"}
                    </td>

                    <td>
                      <div className="action-btns">

                        <button onClick={() => updateStatus(c.id, "Pending")}>
                          Pending
                        </button>

                        <button onClick={() => updateStatus(c.id, "Resolved")}>
                          Resolve
                        </button>

                        <button onClick={() => updateStatus(c.id, "Rejected")}>
                          Reject
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
}