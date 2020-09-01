import React from "react";

import { Button } from "react-bootstrap";
var moment = require("moment");

const ButtonsLine = ({ handleClick }) => {
  return (
    <>
      <Button value={1} onClick={(ev) => handleClick(ev.target.value)}>
        sunday
      </Button>{" "}
      <Button value={2} onClick={(ev) => handleClick(ev.target.value)}>
        monday{" "}
      </Button>{" "}
      <Button value={3} onClick={(ev) => handleClick(ev.target.value)}>
        tuesday
      </Button>{" "}
      <Button value={4} onClick={(ev) => handleClick(ev.target.value)}>
        wednesday
      </Button>{" "}
      <Button value={5} onClick={(ev) => handleClick(ev.target.value)}>
        thursday
      </Button>{" "}
      <Button value={6} onClick={(ev) => handleClick(ev.target.value)}>
        friday
      </Button>{" "}
      <Button value={7} onClick={(ev) => handleClick(ev.target.value)}>
        saturday
      </Button>
      {console.log(moment().day(-7))}
      {console.log(moment().day(0))}
      {console.log(moment().day(7))}
    </>
  );
};

export default ButtonsLine;
