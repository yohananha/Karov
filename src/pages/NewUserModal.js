import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

class newUserModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  handleData(data) {
    console.log(`
      Email: ${data.target.email}
      Fullname: ${data.target.fullname}
      Password: ${data.target.password}
      Role: ${data.target.role}
    `);

    data.preventDefault();
  }

  render() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fullname, setFullname] = React.useState("");
    const [role, setRole] = React.useState("");
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
          onClick={() => this.handleModalShowHide()}
        >
          Add new user
        </Button>

        <Modal show={this.state.showHide}>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHide()}
            >
              <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="newUserEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="newUserName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="fullname"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                  placeholder="Enter full name"
                />
              </Form.Group>
              <Form.Group controlId="newUserPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="newUserRole" required>
                <Form.Label>Choos Role</Form.Label>
                <Form.Control
                  as="select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option />
                  <option value="volunteer">Volunteer</option>
                  <option value="admin">Admin</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.handleModalShowHide()}
              >
                Close
              </Button>
              <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default newUserModal;
