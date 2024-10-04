import React, { useEffect } from 'react';
import './Thanks.css';
import { Col, Container, Row } from 'react-bootstrap';

function Thanks() {
 
  useEffect(() => {
    // Google Ads Conversion Tracking
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16680751805/DRT3CIK9_swZEL2lgJI-'
    });
  }, []);
  
  return (
    <Container fluid>
      {/* Your existing JSX code */}
      <Row className='backgroundRow'>
        <Col>
          <h2 className="text-center text-light thanksH2">Thank You For Your Enquiry</h2>
          <p className="text-center text-light thanksHP">Thank you for choosing Trek Meadows.</p>
        </Col>
      </Row>

     
    </Container>
  );
}

export default Thanks;
