import React from 'react'
import { Col, Row } from 'react-bootstrap';

function WhyChoose() {
  return (
 
        
        <Row className='div-contain bck2 mt-4'>
        <h2 className='custom-h2'>Why Choose Us</h2>
            <Col sm={12} md={4} className='padd-top mb-4 mb-md-0'>
                <div className='why-choose-div bg-white px-3'>
                    <img src={require('../assets/services/1 (1).jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>Handpicked Destination</p>
                </div>
            </Col>
            <Col sm={12} md={4} className='padd-top mb-4 mb-md-0'>
                <div className='why-choose-div bg-white px-3'>
                    <img src={require('../assets/services/5.jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>Best Price Guaranteed</p>
                </div>
            </Col>
            <Col sm={12} md={4} className='padd-top'>
                <div className='why-choose-div bg-white px-3'>
                    <img src={require('../assets/services/6.jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>24/7 Customer Service</p>
                </div>
            </Col>
        </Row>
       
 
  )
}

export default WhyChoose;
