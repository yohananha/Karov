import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100%",
  height: "100%",
};

const MapboxGLMap = ({ points }) => {
  const [point, setPoints] = useState(null);

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibm9hbXNtYXAiLCJhIjoiY2tkc2xxOTY1MHNyOTJwbGk4YjN4NmRwNSJ9.8iMoHVbkmowQPyjFobmOCQ";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [31.753046, 35.199401],
        zoom: 5,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    // if (map && points.length > 0) {
    //   points.map((point) => {
    //     new mapboxgl.Marker().setLngLat([31.827365, 35.072839]).addTo(map);
    //   });
    // }
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};
//{site && <SiteDetails site={site} />}
export default MapboxGLMap;
