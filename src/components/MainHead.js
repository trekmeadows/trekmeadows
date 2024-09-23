import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Phone, Mail } from 'lucide-react';

function MainHead() {
  return (
    <>
      <Row className="py-0 border-bottom border-primary border-2">
        <Row className="py-1 bg-white border-bottom">
          <Col xs={7} md={6} className="d-flex align-items-center">
            <img
              src={require('../assets/Trek Meadows.png')}
              alt="Trek Meadows"
              className="company-logo"
            />
          </Col>
          <Col xs={5} md={6} className="d-flex justify-content-end align-items-center">
            <Nav className="contact-info">
              <Nav.Item className="d-flex align-items-center me-3 border-start border-secondary border-2 px-1">
              <a href={`tel:9103547682`} className='w-100' style={{textDecoration:'none',color:'black'}}><Phone size={20} className="me-1" />
                <span className="contact-text">9103547682</span></a>
              </Nav.Item>
              <Nav.Item className="d-flex align-items-center  border-start border-secondary border-2 px-1">
              <a href={`mailto:kashmirhikers4@gmail.com`} className='w-100' style={{textDecoration:'none',color:'black'}}><Mail size={20} className="me-1" />
               <span className="contact-text">kashmirhikers4@gmail.com</span></a>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Row>
      <style jsx>{`
        .company-logo {
          width: 60px;
          height: auto;
        }
        .contact-info {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }
        .contact-text {
          display: none;
        }
        @media (min-width: 768px) {
          .company-logo {
            width: 75px;
          }
          .contact-text {
            display: inline;
          }
        }
        @media (max-width: 767px) {
          .contact-info {
            justify-content: flex-end;
          }
          .contact-info .nav-item {
            margin-right: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default MainHead;