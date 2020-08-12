import React from 'react';
import './Map.css'
import MapForm from './MapForm';
import { Container,Row,Col } from 'react-bootstrap';


const map =()=>{
    return(
        <Container className="Map">
            <Row id= "mapRow">
                <Col md lg ="8" id="mapBlock">1 of 3</Col>
                <MapForm md lg ="4" ></MapForm>
            </Row>
         </Container>
    )
}

export default map;