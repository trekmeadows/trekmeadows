import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'

function FAQ() {
  return (
  <Row className='div-contain bck1'>
    <Col>
    <h2  className='custom-h2'>FAQ's on Kashmir Tour and Travel Services</h2>
    <Accordion defaultActiveKey="1"  flush style={{textAlign:'left'}} className='mt-4'>
    <Accordion.Item eventKey="1">
      <Accordion.Header>1. Which month is best for the Kashmir trip?</Accordion.Header>
      <Accordion.Body>
      The best time for a Kashmir trip is during the spring (March to May) and summer (June to August) months when the weather is pleasant and the landscapes are lush and vibrant. These months offer ideal conditions for sightseeing, trekking, and enjoying outdoor activities.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>2. Can you arrange transportation and accommodation for the Kashmir trip?</Accordion.Header>
      <Accordion.Body>
      Absolutely! As part of our Kashmir travel agency services, we handle all aspects of your Kashmir trip, including transportation and accommodation. From airport transfers to booking comfortable stays, we ensure your journey is hassle-free and enjoyable.      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
      <Accordion.Header>3. What is the best time to do the Kashmir Great Lakes Trek?</Accordion.Header>
      <Accordion.Body>
      The Kashmir Great Lakes Trek is best undertaken between late June and early September. During this period, the weather is favorable, and the snow on the trails has melted, making it ideal for trekking and enjoying the stunning alpine scenery.      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
      <Accordion.Header>4. How to reach Kashmir?</Accordion.Header>
      <Accordion.Body>
      You can reach Kashmir by air, with flights landing at Srinagar Airport, which is well-connected to major Indian cities. Alternatively, you can travel by train to Jammu and then drive to Srinagar, or opt for a road trip to enjoy the scenic journey.      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item eventKey="5">
      <Accordion.Header>5. What is the local cuisine of Kashmir?</Accordion.Header>
      <Accordion.Body>
      Kashmir’s local cuisine is renowned for its rich and aromatic flavors. Popular dishes include Rogan Josh, Yakhni, Dum Aloo, and the traditional Wazwan feast. Don’t miss out on tasting these delectable dishes during your Kashmir trip.      </Accordion.Body>
    </Accordion.Item>
 

  </Accordion>
    </Col>
  </Row>

  )
}

export default FAQ