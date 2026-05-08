import React, { useState } from "react";
import Login from "./pages/Login";
import CitizenDashboard from "./pages/CitizenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import RaiseComplaint from "./pages/RaiseComplaint";
import MyComplaints from "./pages/MyComplaints";

export default function App() {
  const [user, setUser] = useState(false);
  const [role, setRole] = useState("citizen");
  const [page, setPage] = useState("home");

  // ================= SAMPLE DATA =================
  const [complaints, setComplaints] = useState([
    {
      id: 101,
      title: "Street Light Not Working",
      desc: "Near Sector 12 park, light is broken since 5 days",
      status: "Pending",
      priority: "High",
      assignedTo: "Engineer A"
    },
    {
      id: 102,
      title: "Water Leakage",
      desc: "Pipe burst near main road causing water waste",
      status: "In Progress",
      priority: "High",
      assignedTo: "Officer C"
    },
    {
      id: 103,
      title: "Garbage Not Collected",
      desc: "No garbage pickup in colony for 3 days",
      status: "Resolved",
      priority: "Medium",
      assignedTo: "Worker D"
    },
    {
      id: 104,
      title: "Road Potholes",
      desc: "Multiple potholes causing traffic issues",
      status: "Pending",
      priority: "Medium",
      assignedTo: "Unassigned"
    }
  ]);

  // ================= LOGOUT FIX =================
  const logout = () => {
    setUser(false);
    setRole("citizen");
    setPage("home");
  };

  // ================= LOGIN SCREEN =================
  if (!user) {
    return (
      <Login
        setUser={setUser}
        setRole={setRole}
        setPage={setPage}
      />
    );
  }

  // ================= ADMIN =================
  if (role === "admin") {
    return (
      <AdminDashboard
        complaints={complaints}
        setComplaints={setComplaints}
        setUser={logout}
        setPage={setPage}
      />
    );
  }

  // ================= CITIZEN ROUTES =================
  if (page === "raise") {
    return (
      <RaiseComplaint
        setPage={setPage}
        setComplaints={setComplaints}
      />
    );
  }

  if (page === "complaints") {
    return (
      <MyComplaints
        setPage={setPage}
        complaints={complaints}
      />
    );
  }

  // ================= DEFAULT CITIZEN DASHBOARD =================
  return (
    <CitizenDashboard
      setPage={setPage}
      setUser={logout}
      complaints={complaints}
    />
  );
}