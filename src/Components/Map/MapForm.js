import React from 'react';
import { Form ,Button, Container,Col,Dropdown} from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const mapForm =()=>{
    return(
        <div id="mapForm">
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>
                    <Form.Row controlId="formBasicCheckbox">
                        <Col>
                        <Form.Check type="checkbox" label="Food" />
                        </Col>
                        <Col>
                        <Form.Check type="checkbox" label="Drugs" />
                        </Col>
                    </Form.Row>
                    <DayPickerInput onDayChange={day => console.log(day)} />
                    <Form.Group controlId="Volunteer">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdownVolunteer">
                            Pick Volunteer
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
            </Container>
        </div>
    )
}

export default mapForm;