import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import "../Components/Map/Map.css";
import MapForm from "../Components/Map/MapForm";
import { Container, Row, Col } from "react-bootstrap";
import MapBox from "../Components/MapBox";
import MapBoxGL from "../Components/MapBoxGL";
import MapFormTest from "../Components/MapFormTest";

const Map = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/points")
      .then((response) => response.json())
      .then((data) => {
        setPoints((prevState) => [...prevState, ...data.points]);
      })
      .catch((arr) => console.log(arr));
  }, []);

  // // add the point to mongo and if seccsses add it to the state
  // const addPoint = (point) => {
  //   fetch("http://localhost:5000/points",{
  //     method: 'post',
  //     //JSON.stringify
  //     body: point
  //   })
  //   .then((response) => response.json())
  //   .then((point) => {setPoints([...points, point])})
  //   .catch(arr => console.log(arr))
  // };

  const addPoint = (point) => {
    setPoints([...points, point]);
  };

  return (
    <Container className="Map">
      <Row id="mapRow">
        <Col md lg="8" id="mapBlock">
          <MapBoxGL points={points} />
        </Col>
        <MapFormTest
          addPoint={(point) => {
            addPoint(point);
          }}
        />
        <MapForm md lg="4"></MapForm>
      </Row>
    </Container>
  );
};

export default Map;
