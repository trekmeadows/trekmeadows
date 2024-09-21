import React from 'react'
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import { Phone, User, MapPin, Mail } from 'lucide-react';

function MainHead() {
  return (
    <header>
    <Container fluid className="px-3">
      <Row className="py-2 bg-white border-bottom">
        <Col xs={12} md={6} className="d-flex align-items-center">
          <img 
            src={require('../assets/Trek Meadows.png')} 
            alt="Trek Meadows"
            style={{ width: '100px', height: 'auto' }}
          />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
          <Nav className="me-3">
            <Nav.Item className="d-flex align-items-center me-3">
              <Phone size={16} className="me-1" />
              <span>9103547682</span>
            </Nav.Item>
           <Nav.Item className="d-flex align-items-center me-3">
              <Mail size={16} className="me-1" />
              <span>kashmirhikers4@gmail.com</span>
            </Nav.Item>
            {/*  <Nav.Item className="d-flex align-items-center me-3">
              <MapPin size={16} className="me-1" />
              <span>Stores</span>
            </Nav.Item> */}
          </Nav>
          {/* <Button variant="outline-secondary">Enquiry Now</Button> */}
        </Col>
      </Row>
      
     
    </Container>
  </header>
  )
}

export default MainHead