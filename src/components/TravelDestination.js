import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function TravelDestination() {
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
    <Row className='div-contain bck1'>
        <Row>
            <Col><h2  className='custom-h2'>Best Travel Destinations in Jammu & Kashmir</h2></Col>
        </Row>
        <Carousel 
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"
        >
  <div className='p-1 h-100'><img src={require('../assets/destination/ankur-khandelwal-96sNqtGPSgA-unsplash.jpg')} style={{width:'100%',height:'290px',borderRadius:'10px'}} /><p>Pahalgam</p></div>
  <div className='p-1'><img src={require('../assets/destination/ankur-khandelwal-YRIaEhvGsys-unsplash.jpg')} style={{width:'100%',height:'290px',borderRadius:'10px'}}/><p>Aru Valley</p></div>
  <div className='p-1'><img src={require('../assets/destination/mohammad-bayezid-pr7bYTL5Rag-unsplash.jpg')} style={{width:'100%',height:'290px',borderRadius:'10px'}}/><p>Sonmarg</p></div>
  <div className='p-1'><img src={require('../assets/destination/sudhanshu-yadav-5Bd3MEyCciE-unsplash.jpg')} style={{width:'100%',height:'290px',borderRadius:'10px'}}/><p>Gulmarg</p></div>
  <div className='p-1'><img src={require('../assets/destination/4765.jpg')} style={{width:'100%',height:'290px',borderRadius:'10px'}}/><p>Dal Lake</p></div>
  <div className='p-1'><img src={require('../assets/destination/Mujhal Garden.jpg')} style={{width:'100%',height:'290px',borderRadius:'10px'}}/><p>Mujhal Garden</p></div>
  <div className='p-1'><img src={require('../assets/destination/srinagar.jpg')} style={{width:'100%',height:'290px',borderRadius:'10px'}}/><p>srinagar</p></div>
</Carousel>
   
    </Row>
  )
}

export default TravelDestination