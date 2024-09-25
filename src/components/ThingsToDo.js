import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



function ThingsToDo() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
   <Row className='div-contain bck2'>
    <Col>
        <h2  className='custom-h2'>Things To Do In Kashmir</h2>
        <Carousel 
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"
        >
  <div className='p-1'><img src={require('../assets/trekking/Trekking.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Trekking</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Camping.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Camping</p></div>
  <div className='p-1'><img src={require('../assets/trekking/River Rafting.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>River Rafting</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Shikara Ride.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Shikara Ride</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Golfing.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Golfing</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Mujhal Garden.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Mujhal Garden</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Skiing.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Skiing</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Snowboarding.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Snowboarding</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Houseboat.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Houseboat</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Tulip Garden.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Tulip Garden</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Gandala Cable Car Ride.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Gandala Cable Car Ride</p></div>
  <div className='p-1'><img src={require('../assets/trekking/Hot Air Ballooning.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p>Hot Air Ballooning</p></div>
</Carousel>
    </Col>
   </Row>
  )
}

export default ThingsToDo