import React from 'react'
import { Col, Row } from 'react-bootstrap'

function BestTravel() {
  return (
   <Row className='div-contain bck2' style={{textAlign:'left'}}>
    <Col md={6} className="d-flex flex-column justify-content-center">
        <h2  className='custom-h2'>Explore Kashmir with Kashmir Hikers</h2>
        <p>Embark on an unforgettable journey through the breathtaking landscapes of Kashmir with Kashmir Hikers, your trusted tour and travel experts. We specialize in crafting personalized itineraries that showcase the best of this enchanting region. From serene houseboat stays on Dal Lake to exhilarating treks in the Himalayas, we'll ensure your Kashmir experience is nothing short of magical. Discover hidden gems, immerse yourself in local culture, and create memories that will last a lifetime. Book your dream Kashmir tour today with Kashmir Hikers.</p>
            </Col>
    <Col md={6}>
        <img src={require('../assets/besttravel.jpg')} className='best-travel-img'/>
    </Col>
   </Row>
  )
}

export default BestTravel