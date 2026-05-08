import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  const position = [28.6139, 77.2090];

  return (
    <div style={{ width: "100%" }}>
      <MapContainer
        center={position}
        zoom={12}
        style={{ height: "400px", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Select Complaint Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}