import React from 'react'
import { Col, Row } from 'react-bootstrap';

function WhyChoose() {
  return (
    <div className='div-contain bck1'>
        <Row>
            <Col>
                <h2 className='custom-h2'>Why Choose Us</h2>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col sm={12} md={4} className='padd-top mb-0 mb-md-0'>
                <div className='why-choose-div'>
                    <img src={require('../assets/services/1 (1).jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>Local Tour Operators</p>
                </div>
            </Col>
            <Col sm={12} md={4} className='padd-top mb-0 mb-md-0'>
                <div className='why-choose-div'>
                    <img src={require('../assets/services/car.png')} className='why-choose-img' />
                    <p className='why-choose-p'>Transportation</p>
                </div>
            </Col>
            <Col sm={12} md={4} className='padd-top'>
                <div className='why-choose-div'>
                    <img src={require('../assets/services/3.jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>Hotel Accommodation</p>
                </div>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col sm={12} md={4} className='mb-0 mb-md-0'>
                <div className='why-choose-div'>
                    <img src={require('../assets/services/4.jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>Meals</p>
                </div>
            </Col>
            <Col sm={12} md={4} className='padd-top mb-0 mb-md-0'>
                <div className='why-choose-div'>
                    <img src={require('../assets/services/5.jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>Best Price</p>
                </div>
            </Col>
            <Col sm={12} md={4} className='padd-top'>
                <div className='why-choose-div'>
                    <img src={require('../assets/services/6.jpeg')} className='why-choose-img' />
                    <p className='why-choose-p'>24*7 Support</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default WhyChoose;
