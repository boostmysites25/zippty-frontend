import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default icon issue in react-leaflet v4
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  const position = [26.952498059942855, 75.79696180188547];

  return (
    <div className="wrapper rounded-3xl overflow-hidden">
      <div className="rounded-3xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={10}
          style={{
            height: "70vh",
            width: "100%",
            zIndex: 0,
            borderRadius: "24px",
          }}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>Your location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;