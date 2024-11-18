import React from "react";
import L from "leaflet";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import covidData from "../../covidData.json"; // Directly import the JSON file
import "leaflet/dist/leaflet.css";

const Map = () => {
  const stateCoordinates = {
    "Andhra Pradesh": {lat: 15.9129, lng: 79.74},
    Assam: {lat: 26.2006, lng: 92.9376},
    Bihar: {lat: 25.0961, lng: 85.3131},
    Chhattisgarh: {lat: 21.2787, lng: 81.8661},
    Delhi: {lat: 28.6139, lng: 77.209},
    Goa: {lat: 15.2993, lng: 74.124},
    Gujarat: {lat: 22.2587, lng: 71.1924},
    Haryana: {lat: 29.0588, lng: 76.0856},
    "Jammu & Kashmir": {lat: 33.7782, lng: 76.5762},
    Karnataka: {lat: 15.3173, lng: 75.7138},
    Kerala: {lat: 10.8505, lng: 76.2711},
    "Madhya Pradesh": {lat: 23.2599, lng: 77.4126},
    Maharashtra: {lat: 19.7515, lng: 75.7139},
    Meghalaya: {lat: 25.467, lng: 91.3662},
    Nagaland: {lat: 26.1584, lng: 94.5624},
    Odisha: {lat: 20.9517, lng: 85.0985},
    Punjab: {lat: 31.1471, lng: 75.3412},
    Rajasthan: {lat: 27.0238, lng: 74.2179},
    Sikkim: {lat: 27.533, lng: 88.5122},
    "Tamil Nadu": {lat: 11.1271, lng: 78.6569},
    Tripura: {lat: 23.9408, lng: 91.9882},
    "Uttar Pradesh": {lat: 26.8467, lng: 80.9462},
    Uttarakhand: {lat: 30.0668, lng: 79.0193},
    "West Bengal": {lat: 22.9868, lng: 87.855},
  };

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{height: "100%", width: "100%"}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {covidData.India.states.map((state) => {
        const {name, totalCases, activeCases, recovered, deaths} = state;
        const {lat, lng} = stateCoordinates[name] || {}; // Default to empty object if no coordinates are found

        return (
          lat &&
          lng && (
            <Marker key={name} position={[lat, lng]}>
              <Popup>
                <strong>{name}</strong>
                <br />
                Total Cases: {totalCases}
                <br />
                Active Cases: {activeCases}
                <br />
                Recovered: {recovered}
                <br />
                Deaths: {deaths}
              </Popup>
            </Marker>
          )
        );
      })}
    </MapContainer>
  );
};

export default Map;
