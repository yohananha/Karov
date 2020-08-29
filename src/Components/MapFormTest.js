import React, { useEffect } from "react";

const MapFormTest = ({ addPoint }) => {
  const point = {
    address: "777 shoshana st jerusalem",
    date: "2012-08-12T23:15:30.000+00:00",
    volunteer: "aharon",
    Latitude: 31.732865,
    Longitude: 35.19282,
    //31.732865, 35.192820
    food: false,
    drugs: true,
  };
  useEffect(() => {
    addPoint(point);
  }, []);

  return <div />;
};

export default MapFormTest;
