import React, { Component } from "react";
import { Container, Button, Col, Form, Tabs, Tab } from "react-bootstrap";
import DayPicker from "react-day-picker/DayPicker";
import "react-day-picker/lib/style.css";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

// If you want to use the provided css
import "react-google-places-autocomplete/dist/index.min.css";

class mapForm extends Component {
  constructor() {
    super();

    var currentDate = this.extractDate(new Date());

    this.state = {
      address: "",
      food: false,
      drugs: false,
      date: currentDate,
      volunteer: "",
      showDist: false,
      showVol: false,
      latitude: 31.76,
      longitude: 35.2,
    };

    this.showdist = this.showdist.bind(this);
    this.showVol = this.showVol.bind(this);
  }

  onCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  addressHandler = (description) => {
    this.setState({ address: description });
    geocodeByAddress(description)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        this.setState({
          latitude: lat,
          longitude: lng,
        })
      );
  };

  extractDate(date) {
    var currentDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return currentDate;
  }

  dateHandler = (e) => {
    const currentDate = this.extractDate(e);
    this.setState({ date: currentDate });
    this.props.changeDay(currentDate);
  };

  volHandler = (e) => {
    this.setState({ volunteer: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addPoint(this.state);
  };

  showdist = () => {
    this.setState({ showDist: !this.state.showDist });
  };
  showVol = () => {
    this.setState({ showVol: !this.state.showVol });
  };
  render() {
    return (
      <div id="mapForm">
        <Container>
          <Form onSubmit={this.onSubmit} style={{}}>
            <Form.Group>
              <Form.Label>Address:</Form.Label>
              <br />
              <GooglePlacesAutocomplete
                onSelect={({ description }) => this.addressHandler(description)}
              />
              {/* <Form.Control type="text" name="address" value={this.state.address} onChange={this.addressHandler}/> */}
            </Form.Group>
            <Form.Group>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                variant="pills"
              >
                <Tab eventKey="Add Distribution" title="Add Distribution">
                  <div className="DistSection">
                    <Form.Group>
                      <br />
                      <Form.Row>
                        <Col>
                          <Form.Check
                            type="switch"
                            id="food-switch"
                            label="food"
                            name="food"
                            defaultChecked={this.food}
                            onChange={this.onCheck}
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            type="switch"
                            id="drugs-switch"
                            label="drugs"
                            name="drugs"
                            defaultChecked={this.drugs}
                            onChange={this.onCheck}
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
                  </div>
                </Tab>
                <Tab eventKey="Match Volunteer" title="Match Volunteer">
                  <Form.Group>
                    <br />
                    <Form.Control
                      className="volSection"
                      as="select"
                      custom
                      name="volunteer"
                      onChange={this.volHandler}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Tab>
              </Tabs>
              <Form.Group>
                <DayPicker
                  name="date"
                  value={this.date}
                  onDayClick={(day) => this.dateHandler(day)}
                  onChange={this.dateHandler}
                />
              </Form.Group>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default mapForm;
