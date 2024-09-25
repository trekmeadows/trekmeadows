import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AboutKashmir2() {
  return (
    <Row className='div-contain bck2'>
        <Col md={6} className=''>
    <img src={require('../assets/aboutkashmir2.webp')} className='about-kashmir-img mb-3 mb-md-0' />
        </Col>
        <Col md={6}>
            <h2  className='custom-h2 '>About Kashmir</h2>
            <p className='m-0' style={{textAlign:'left'}}>Kashmir is called heaven on earth for its breathtaking beauty and richness.  you will have a view of Snow kept Eco Himalayas to the tranquil Dal Lake. This place is a unique blend of natural and vibrant traditions.  You can explore the ancient Mughal Gardens' local hospitality and immerse in the beauty of this timeless land. 
The place goes back to the Vedic period and it has been ruled by various Empires and dynasties including the Mauryans, Kushans and Mughals.  Holding a cultural heritage that reflects art, music, literature and tradition, this place is divine. 
</p>
        </Col>
    </Row>
  )
}

export default AboutKashmir2