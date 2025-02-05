"use client";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "221px",
};

const defaultCenter = {
  lat: 24.3733, // Rajshahi latitude
  lng: 88.6049, // Rajshahi
};

export default function Map() {
  const [location, setLocation] = useState(null);

  // Handle map click to get the latitude and longitude
  const handleMapClick = (e) => {
    setLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={10}
        onClick={handleMapClick}
      >
        {/* If location is selected, display the marker */}
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
}
