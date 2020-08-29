import React from "react";
import { Container, Button } from "react-bootstrap";

export default function CreatAccount() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [role, setRole] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      First Name: ${firstname}
      LastName: ${lastname}
      Phone: ${phone}
      Password: ${password}
      isManager: ${role}
    `);

    event.preventDefault();
  };

  return (
    <Container className="center">
      <form onSubmit={handleSubmit} id="create_account">
        <h1>Create Account</h1>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Full Name:
          <input
            name="firstname"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>
        <label>
          Full Name:
          <input
            name="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Role:
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ height: "40px" }}
            required
          >
            <option />
            <option value="false">Volunteer</option>
            <option value="true">Admin</option>
          </select>
        </label>
        <Button type="success">Submit</Button>
      </form>
    </Container>
  );
}
