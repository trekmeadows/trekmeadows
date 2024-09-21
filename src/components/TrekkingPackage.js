import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function TrekkingPackage() {

    
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
        <h2  className='custom-h2'>Trekking Packages</h2>
        <p>Popular Kashmir Tour Packages</p>
        <Carousel 
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"
        >
       <div className='tour-package-div p-2'>
        <img src={require('../assets/tourpackagesimages/lakes.jpg')}  style={{width:'99%',height:'auto',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>7 days & 6 nights</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Great Lakes Trek</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Srinagar - Sonamarg</span></Col>
        </Row>
        {/* <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel Food Transport</span></Col>
        </Row> */}

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.3em',fontWeight:'bold',paddingLeft:'2%'}}>INR 18,000 per person</span></Col>
            {/* <Col><strike style={{textAlign:'left',color:'#333',fontSize:'0.8em'}}>INR 90,000</strike></Col> */}
            {/* <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',backgroundColor:'#ff9933',borderRadius:'5px'}} className='p-1'>save INR 2000</span></Col> */}
        </Row>
        <Row>
            {/* <Col></Col> */}
            <Col><button style={{backgroundColor:'#ff9933',border:'none',borderRadius:'5px',color:'#fff',paddingLeft:'15%',paddingRight:'15%',paddingTop:'2%',paddingBottom:'2%'}}>Book Now</button></Col>
            
        </Row>
        </div>
        <div className='tour-package-div p-2'>
        <img src={require('../assets/tourpackagesimages/tarsar.jpg')}  style={{width:'99%',height:'auto',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>7 days & 6 nights</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Tarsar Marsar Trek Package</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Srinagar - Aru Valley</span></Col>
        </Row>
        {/* <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel Food Transport</span></Col>
        </Row> */}

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.3em',fontWeight:'bold',paddingLeft:'2%'}}>INR 16,000 per person</span></Col>
            {/* <Col><strike style={{textAlign:'left',color:'#333',fontSize:'0.8em'}}>INR 90,000</strike></Col> */}
            {/* <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',backgroundColor:'#ff9933',borderRadius:'5px'}} className='p-1'>save INR 2000</span></Col> */}
        </Row>
        <Row>
            {/* <Col></Col> */}
            <Col><button style={{backgroundColor:'#ff9933',border:'none',borderRadius:'5px',color:'#fff',paddingLeft:'15%',paddingRight:'15%',paddingTop:'2%',paddingBottom:'2%'}}>Book Now</button></Col>
            
        </Row>
        </div>
        <div className='tour-package-div p-2'>
        <img src={require('../assets/tourpackagesimages/NARANAG1.jpg')}  style={{width:'99%',height:'auto',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>5 days & 4 nights</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Naranag To Gangabal Trek Package</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Srinagar - Naranag - Gangabal</span></Col>
        </Row>
        {/* <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel Food Transport</span></Col>
        </Row> */}

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.3em',fontWeight:'bold',paddingLeft:'2%'}}>INR 9,000 per person</span></Col>
            {/* <Col><strike style={{textAlign:'left',color:'#333',fontSize:'0.8em'}}>INR 90,000</strike></Col> */}
            {/* <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',backgroundColor:'#ff9933',borderRadius:'5px'}} className='p-1'>save INR 2000</span></Col> */}
        </Row>
        <Row>
            {/* <Col></Col> */}
            <Col><button style={{backgroundColor:'#ff9933',border:'none',borderRadius:'5px',color:'#fff',paddingLeft:'15%',paddingRight:'15%',paddingTop:'2%',paddingBottom:'2%'}}>Book Now</button></Col>
            
        </Row>
        </div>
      
        </Carousel>
    </Col>
   </Row>
  )
}

export default TrekkingPackage