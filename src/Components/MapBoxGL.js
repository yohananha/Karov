import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

// const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibm9hbXNtYXAiLCJhIjoiY2tkc2xxOTY1MHNyOTJwbGk4YjN4NmRwNSJ9.8iMoHVbkmowQPyjFobmOCQ";

const MapBoxGL = ({ points, handleClick }) => {
  const [showPoints, setShowPoints] = useState(false);
  const [p, setp] = useState(points);

  const [viewport, setViewport] = useState({
    latitude: 31.753046,
    longitude: 35.199401,
    zoom: 11,
    bearing: 0, // rotate  360
    pitch: 0, // tilt the angle of the map
  });

  // const dummyPoints = [
  //   { lat: 31.786162, lon: 35.194577 },
  //   { lat: 31.787832, lon: 35.196869 },
  //   { lat: 31.786798, lon: 35.192546 },
  // ];

  // useEffect(() => {
  //   console.log("useEffect was activated!");
  //   console.log(points);
  //   if (points.length > 0) {
  //     setShowPoints(true);
  //   }
  // });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {/* show all points */}
      {points.length > 0 &&
        points.map((point) => {
          return (
            <Marker latitude={point.Latitude} longitude={point.Longitude}>
              <img
                onClick={() => handleClick(point)}
                src={
                  point.volunteer
                    ? "location-blue-icon.png"
                    : "location-icon.png"
                }
                style={{ cursor: "pointer", width: "50px", height: "50px" }}
              />
            </Marker>
          );
        })}
      <Popup
        latitude={31.760967}
        longitude={35.175017}
        closeButton={true}
        closeOnClick={false}
        onClose={() => this.setState({ showPopup: false })}
        anchor="top"
      >
        <div>You are here</div>
      </Popup>
    </ReactMapGL>
  );
};

export default MapBoxGL;
