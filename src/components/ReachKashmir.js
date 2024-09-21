import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Plane, Bus, BusFront, TrainFront } from 'lucide-react'

function ReachKashmir() {
  return (
  <Row   className='div-contain bck2'>
  <h2 className='custom-h2'>How to reach kashmir</h2>
    <Col sm={12} md={4}>
        <Row>
            <Col md={1}><Plane color="red" size={30} /></Col>
            <Col md={11}>
            <h5>How to Reach Kashmir by Air</h5>
            <p>You can take Srinagar International Airport which connects you to major cities like Delhi Bangalore  Mumbai and Chennai.</p>
            </Col>
        </Row>
    </Col>
    <Col sm={12} md={4}>
        <Row>
            <Col md={1}><TrainFront color="red" size={30} /></Col>
            <Col md={11}>
            <h5>How to Reach Kashmir by Train</h5>
            <p>You must travel by Jammu Tawi Railway Station as it is the nearest major station that connects to various parts of India.</p>
            </Col>
        </Row>
    </Col>
    <Col sm={12} md={4}>
        <Row>
            <Col md={1}><BusFront color="red" size={30} /></Col>
            <Col md={11}>
            <h5>How to Reach Kashmir by Bus</h5>
            <p>If you like to travel by road, reaching here is accessible through National Highway 44 (NH 44).</p>
            </Col>
        </Row>
    </Col>
  </Row>
  )
}

export default ReachKashmir