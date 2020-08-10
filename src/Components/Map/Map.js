import React from 'react';
import MapForm from './MapForm';
import { Container,Row,Col } from 'react-bootstrap';


const map =()=>{
    return(
        <Container className="Map" style={{height:"100vh"}}>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <MapForm/>  
            </Row>
    </Container>
    )
}

export default map;