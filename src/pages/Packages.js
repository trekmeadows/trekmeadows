import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Camera, CarTaxiFront,Plane, HandPlatter } from 'lucide-react';
import FAQ2 from '../components/FAQ2';

function Packages({handleShow}) {
  return (
    <Container fluid className="package-container">
    <Row className="div-package">
      <Col className="d-flex align-items-end">
        <h1 className="text-light mb-0">KASHMIR TOUR PACKAGES</h1>
      </Col>
    </Row>
    <Row className='p-5 bg-grey'>
      <Col>
<p>Kashmir Tour Guide
Kashmir Holiday packages - Kashmir, is the most adorable place everyone wants to visit once in their lifetime and enjoy the magnificent</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2 className='' style={{textAlign:'center'}}>Family Tour Package</h2>
        
    <Row className='div-contain-inner bck1 mt-0'>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/7.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Solo Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,000 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button  onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/8.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Group Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4}>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/9.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Romantic Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 12,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
  
    </Row>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2 className='' style={{textAlign:'center'}}>Family Tour Package</h2>
        
    <Row className='div-contain-inner bck1 mt-0'>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/7.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Solo Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,000 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button  onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/8.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Group Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4}>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/9.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Romantic Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 12,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
  
    </Row>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2 className='' style={{textAlign:'center'}}>Family Tour Package</h2>
        
    <Row className='div-contain-inner bck1 mt-0'>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/7.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Solo Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,000 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button  onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/8.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Group Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4}>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/9.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Romantic Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 12,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
  
    </Row>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2 className='' style={{textAlign:'center'}}>Family Tour Package</h2>
        
    <Row className='div-contain-inner bck1 mt-0'>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/7.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Solo Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,000 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button  onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/8.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Group Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4}>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/9.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Romantic Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 12,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
  
    </Row>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2 className='' style={{textAlign:'center'}}>Family Tour Package</h2>
        
    <Row className='div-contain-inner bck1 mt-0'>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/7.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Solo Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,000 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button  onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/8.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Group Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4}>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/9.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Romantic Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 12,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
  
    </Row>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2 className='' style={{textAlign:'center'}}>Family Tour Package</h2>
        
    <Row className='div-contain-inner bck1 mt-0'>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/7.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Solo Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,000 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button  onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4} className='mb-3 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/8.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Group Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 9,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4}>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'7px',backgroundColor:'white'}}>
        <img src={require('../assets/pakages/9.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1em',fontWeight:'bold'}}>Romantic Tour Package</h3>
        <Row>
            <Col>
            <center>
            <Plane color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Flight</p>
            </center>
            </Col>
            <Col>
            <center>
            <Camera color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Sightseeing</p>
            </center>
            </Col>
            <Col>
            <center>
            <CarTaxiFront color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Transfer</p>
            </center>
            </Col>
            <Col>
            <center>
            <HandPlatter color="red" size={25} />
            <p style={{fontSize:'0.8em',color:'#333'}}>Meals</p>
            </center>
            </Col>
        </Row>
        <Row>
            <Col md={7}>
                <p style={{color:'#b0b0b0',fontSize:'1em',lineHeight:'0.4em'}}>Starting From</p>
                <p style={{color:'#0c4da2',fontSize:'1.5em',fontWeight:'bold',lineHeight:'0.4em'}}>₹ 12,500 <span style={{fontSize:'0.6em'}}>(For Person)</span></p>
            </Col>
            <Col md={5} className='d-flex flex-row-reverse'>
                <Button onClick={handleShow}>Book Now</Button>
            </Col>
        </Row>
        </div>
      
    </div>
    </Col>
  
    </Row>
      </Col>
    </Row>
    <FAQ2 />
  </Container>
  )
}

export default Packages