import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AboutTrek() {
  return (
   <Row className='div-contain bck1' style={{textAlign:'left'}}>
    <Col md={6} className="d-flex flex-column justify-content-center">
        <h2  className='custom-h2'>About Trek Meadows </h2>
        <p>Trek Meadows is the gateway to your enhancing trip in Kashmir. Specializing in curating tour packages, we make your trip a memorable one. Get into the beauty of mountains, rich culture, and the ambience of a surreal place. Sure it is a paradise on earth you can plan your family vacation, a couple's romantic getaway, an adventure trip with your friends, or a solo Traveler. We have been the perfect tour package for you.</p>
            </Col>
    <Col md={6}>
        <img src={require('../assets/trekk.webp')} className='best-travel-img'/>
    </Col>
   </Row>
  )
}

export default AboutTrek