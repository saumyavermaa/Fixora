import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function RaiseComplaint({
  setPage,
  setComplaints,
  setUser   // ✅ ADD THIS
}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const submit = () => {
    if (!title || !desc) return alert("Fill all fields");

    setComplaints((prev) => [
      {
        id: Date.now(),
        title,
        desc,
        image,
        status: "Pending",
        priority: "Low",
        assignedTo: "Unassigned",
        createdBy: "citizen"
      },
      ...prev,
    ]);

    setPage("complaints");
  };

  return (
    <div className="page">

      {/* ✅ FIXED NAVBAR */}
      <Navbar
        setPage={setPage}
        setUser={setUser}
        role="citizen"
      />

      <div className="content form-card">

        <h2>Raise Complaint</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files[0]))
          }
        />

        {image && <img src={image} width="100%" alt="preview" />}

        <button className="primary-btn" onClick={submit}>
          Submit
        </button>

      </div>
    </div>
  );
}