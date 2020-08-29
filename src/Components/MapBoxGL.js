import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

// const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibm9hbXNtYXAiLCJhIjoiY2tkc2xxOTY1MHNyOTJwbGk4YjN4NmRwNSJ9.8iMoHVbkmowQPyjFobmOCQ";

const MapBoxGL = ({ points }) => {
  const [showPoints, setShowPoints] = useState(false);
  const [p, setp] = useState(points);

  const [viewport, setViewport] = useState({
    latitude: 31.753046,
    longitude: 35.199401,
    zoom: 11,
    bearing: 0, // rotate  360
    pitch: 0, // tilt the angle of the map
  });
  useEffect(() => console.log("000   points len: ", points.length));
  useEffect(() => console.log("000   p len: ", p.length));

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
      {/* <Marker
        latitude={31.785402}
        longitude={35.194489}
        offsetLeft={0}
        offsetTop={0}
      >
        <img
          src="location-icon.png"
          style={{ width: "50px", height: "50px" }}
        />
      
      </Marker> */}
      {console.log("LEN: ", points.length)}

      {points.length > 0 &&
        points.map((point) => {
          return (
            <Marker latitude={point.Latitude} longitude={point.Longitude}>
              <img
                src="location-icon.png"
                style={{ width: "50px", height: "50px" }}
              />
            </Marker>
          );
        })}

      {/* {points.map((item) => {
        return (
          <Marker latitude={item.Latitude} longitude={item.Longitude}>
            <img
              src="location-icon.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Marker>
        );
      })} */}

      {/* {console.log(points.leanth)}
      {console.log(points[0])}
      {console.log(typeof points[0])}
      {console.log(Object.keys(points[0]))} */}
      {/* 
      {points.map((point) => (
        <Marker latitude={point.Latitude} longitude={point.Longitude}>
          <img
            src="location-icon.png"
            style={{ width: "50px", height: "50px" }}
          />
        </Marker>
      ))} */}
    </ReactMapGL>
  );
};

export default MapBoxGL;
