import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const users = () => {
  return (
    <div>
      <Button
        variant="success"
        style={{
          position: "absolute",
          right: "0px",
          border: "3px solid #73AD21",
          padding: "10px",
          margin: "10px",
        }}
        href="/users/new"
      >
        Add new user
      </Button>
      <Jumbotron className="users">
        <h1>Users</h1>
      </Jumbotron>
    </div>
  );
};

export default users;
