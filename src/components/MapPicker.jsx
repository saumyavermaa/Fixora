import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

function LocationMarker({ setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
}

export default function MapPicker({ setPosition }) {
  const [pos, setPos] = useState(null);

  return (
    <div className="map-wrapper">
      <h3>Select Location</h3>

      <MapContainer
        center={[28.6139, 77.2090]} // Delhi default
        zoom={12}
        className="map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          setPosition={(p) => {
            setPos(p);
            setPosition(p);
          }}
        />

        {pos && <Marker position={pos} />}
      </MapContainer>
    </div>
  );
}