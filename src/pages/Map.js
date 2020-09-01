import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import "../Components/Map/Map.css";
import MapForm from "../Components/Map/MapForm";
import { Container, Row, Col } from "react-bootstrap";
import MapBox from "../Components/MapBox";
import MapBoxGL from "../Components/MapBoxGL";
import MapFormTest from "../Components/MapFormTest";
import ButtonsLine from "../Components/ButtonsLine";
var moment = require("moment");

const Map = () => {
  const [points, setPoints] = useState([]);
  const [pointsToShow, setPointsToShow] = useState([]);
  const [day, setDay] = useState(1);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/points")
      .then((response) => response.json())
      .then((data) => {
        const pointsInRange = data.points.filter((point) =>
          inThisWeek(point.date)
        );
        setPoints((prevState) => [...prevState, ...pointsInRange]);
        setPointsToShow(
          pointsInRange.filter((point) => inSpecificDay(point, day))
        );
      })
      .catch((arr) => console.log(arr));
  }, []);

  useEffect(() => {
    setPointsToShow(points.filter((point) => inSpecificDay(point, day)));
  }, [day]);

  // useEffect(() => {
  //   ////
  // }, [popupInfo]);

  const addPoint = (point) => {
    setPoints([...points, point]);
  };

  const inThisWeek = (date) => {
    return moment(date).isSame(new Date(), "week");
  };

  const inSpecificDay = (point, day) => {
    return day == moment(point.date).day();
  };

  const changeDay = (day) => {
    setDay(day);
  };

  const onClickMarker = (point) => {
    setPopupInfo(point);
  };

  const renderPopup = () => {
    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.Longitude}
        latitude={popupInfo.Latitude}
        closeOnClick={false}
        onClose={() => setPopupInfo(null)}
      >
        {console.log("from here: ")}
        {console.log(popupInfo.Longitude, popupInfo.Latitude)}

        <h2>this is popup!</h2>
        <img src={"location-icon.png"} />
        {/* <CityInfo info={popupInfo} /> */}
      </Popup>
    );
  };

  const popupTest = () => {
    return (
      <Popup
        latitude={37.78}
        longitude={-122.41}
        closeButton={true}
        closeOnClick={false}
        onClose={() => this.setState({ showPopup: false })}
        anchor="top"
      >
        <div>You are here</div>
      </Popup>
    );
  };
  // // first version
  // useEffect(() => {
  //   fetch("http://localhost:5000/points")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPoints((prevState) => [...prevState, ...data.points]);
  //     })
  //     .catch((arr) => console.log(arr));
  // }, []);

  // ------

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

  return (
    <Container className="Map">
      <Row id="mapRow">
        <Col md lg="8" id="mapBlock">
          <ButtonsLine handleClick={(day) => changeDay(day)} />
          <MapBoxGL
            points={points}
            handleClick={(point) => onClickMarker(point)}
          >
            {popupInfo && renderPopup()}
            {popupInfo && popupTest()}
          </MapBoxGL>
          {/*popupInfo && console.log("hi ther: ", popupInfo)*/}
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
