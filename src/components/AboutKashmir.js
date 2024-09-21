import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AboutKashmir() {
  return (
    <Row className='div-contain bck2'>
        <Col md={6}>
    <img src={require('../assets/934.jpg')} className='about-kashmir-img' />
        </Col>
        <Col md={6}>
            <h2  className='custom-h2'>Discover the Enchanting Beauty of Kashmir</h2>
            <p style={{textAlign:'left'}}>Kashmir, often called "Paradise on Earth," offers a Kashmir trip filled with stunning landscapes, from snow-capped peaks to serene lakes. As the best travel agency for Kashmir tours, Kashmir Hikers brings this beauty to life with expertly crafted Kashmir holiday packages tailored to your desires. Whether you’re trekking in Gulmarg, exploring Srinagar’s gardens, or cruising Dal Lake, our team ensures a seamless and unforgettable experience. Call Kashmir Hikers to make your Kashmir trip an adventure where nature's splendor meets exceptional service.</p>
            {/* <button style={{backgroundColor:'#ff9933',border:'none',borderRadius:'5px',color:'#fff',paddingLeft:'5%',paddingRight:'5%',paddingTop:'2%',paddingBottom:'2%'}}>Know More</button> */}
        </Col>
    </Row>
  )
}

export default AboutKashmir