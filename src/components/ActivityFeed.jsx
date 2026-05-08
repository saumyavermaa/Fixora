import React, { useEffect, useState } from "react";

const messages = [
  "🧠 AI detected new complaint: Road damage",
  "📍 Location tagged automatically",
  "⚡ Priority marked as HIGH",
  "🚧 Complaint assigned to field officer",
  "🔄 Status updated to In Progress",
  "🧠 AI classified issue: Water leakage",
  "📊 Analytics updated in dashboard",
  "🚨 New critical issue reported nearby"
];

export default function ActivityFeed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg =
        messages[Math.floor(Math.random() * messages.length)];

      setFeed((prev) => [randomMsg, ...prev].slice(0, 6));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feed-card">
      <h3>Live AI Activity Feed ⚡</h3>

      {feed.map((item, index) => (
        <div key={index} className="feed-item">
          {item}
        </div>
      ))}
    </div>
  );
}