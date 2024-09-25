import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function TourGallery() {

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
            <h2  className='custom-h2'>Kashmir Tour Gallery</h2>
            <Carousel 
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"
        >
  <div className='p-1'><img src={require('../assets/gallery/1.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/2.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/3.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/4.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/5.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/6.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/7.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/8.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/9.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/10.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/11.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>
  <div className='p-1'><img src={require('../assets/gallery/12.jpg')} style={{width:'100%',height:'auto',borderRadius:'10px'}}/><p></p></div>

</Carousel>
        </Col>
    </Row>

    
  )
}

export default TourGallery