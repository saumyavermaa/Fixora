import React, { useEffect, useState } from "react";

const notifications = [
  "🧠 AI detected new complaint",
  "📍 Location automatically tagged",
  "⚡ Complaint marked as HIGH priority",
  "🚧 Assigned to field officer",
  "🔄 Status updated: In Progress",
  "🚨 Critical issue reported nearby"
];

export default function Notifications() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const msg =
        notifications[Math.floor(Math.random() * notifications.length)];

      setToast(msg);

      setTimeout(() => {
        setToast(null);
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </>
  );
}