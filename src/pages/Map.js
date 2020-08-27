import React, { useEffect, useState } from "react";

import "../Components/Map/Map.css";
import MapForm from "../Components/Map/MapForm";
import { Container, Row, Col } from "react-bootstrap";
import MapBox from "../Components/MapBox";

const Map = () => {
  const [points, setPoints] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/points")
      .then((response) => response.json())
      .then((data) => console.log(data));
    /////
    // fetch("http://localhost:5000/points")
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     // console.log("2222222");
    //     // //setPoints(data);
    //     console.log(data);
    //   })
    //   .catch((arr) => console.log(arr));
    //   ////
  }, []);

  return (
    <Container className="Map">
      <Row id="mapRow">
        <Col md lg="8" id="mapBlock">
          {points && points.length}
          <MapBox />
        </Col>
        <MapForm md lg="4"></MapForm>
      </Row>
    </Container>
  );
};

export default Map;
