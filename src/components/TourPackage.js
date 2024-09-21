import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function TourPackage() {

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
    <>
   <Row className='div-contain bck2'>
    <Col>
        <h2 className='custom-h2'>Our Kashmir Holidays Packages</h2>
        <p>Popular Kashmir Tour Packages</p>
        {/* <Carousel 
        // showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"
        >
        <div className='tour-package-div p-2'>
        <img src={require('../assets/pack/family.jpg')}  style={{width:'99%',height:'auto',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>4 Nights / 5 Days</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Family Packages</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Srinagar - Gulmarg - Pahalgam - Sonmarg</span></Col>
        </Row>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.1em',fontWeight:'bold',paddingLeft:'2%'}}>INR 50,000 ( For 3 Persons )</span></Col>
        </Row>
        <Row>
            <Col><button style={{backgroundColor:'#ff9933',border:'none',borderRadius:'5px',color:'#fff',paddingLeft:'15%',paddingRight:'15%',paddingTop:'2%',paddingBottom:'2%'}}>Send Enquiry</button></Col>
            
        </Row>
        </div>
        <div className='tour-package-div p-2'>
        <img src={require('../assets/pack/couple.jpg')}  style={{width:'99%',height:'auto',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>4 days & 3 nights</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Packages For Couples</p>
        <Row style={{textAlign:'left'}}>
        <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Srinagar - Gulmarg - Pahalgam - Sonmarg</span></Col>
        </Row>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Food. Transport</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.1em',fontWeight:'bold',paddingLeft:'2%'}}>INR 36,000  For Couple</span></Col>
            <Col><strike style={{textAlign:'left',color:'#333',fontSize:'0.8em'}}>INR 60,000</strike></Col>
        </Row>
        <Row>
            <Col><button style={{backgroundColor:'#ff9933',border:'none',borderRadius:'5px',color:'#fff',paddingLeft:'15%',paddingRight:'15%',paddingTop:'2%',paddingBottom:'2%'}}>Send Enquiry</button></Col>
            
        </Row>
        </div>
       
        

        
       
      
      

       
       
       

        
       
        </Carousel> */}
    </Col>
    <Row>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div p-2' style={{borderRadius:'7px'}}>
        <img src={require('../assets/pack/family.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration: 4 Nights / 5 Dayss</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Family Packages</p>

        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.1em',fontWeight:'bold',paddingLeft:'2%'}}>INR 50,000 For 3 Persons</span></Col>
        </Row>
        <Row>
        <Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div p-2'  style={{borderRadius:'7px'}}>
        <img src={require('../assets/pack/group.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration: 6 Nights / 7 Days</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Group Packages</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.1em',fontWeight:'bold',paddingLeft:'2%'}}>INR 10,000 Per Person</span></Col>
        </Row>
        <Row>
          
        <Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div p-2'  style={{borderRadius:'7px'}}>
        <img src={require('../assets/pack/couple.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration:  4 Nights / 5 Days</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Honeymoon Package</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.1em',fontWeight:'bold',paddingLeft:'2%'}}>INR 40,000 Per Couple</span></Col>
        </Row>
        <Row>
        <Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div p-2 h-100'  style={{borderRadius:'7px'}}>
        <img src={require('../assets/pack/solo.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration:  3 Nights / 4 Days</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Solo Tour Packages</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.1em',fontWeight:'bold',paddingLeft:'2%'}}>INR 8000 Per Person</span></Col>
        </Row>
        <Row>
           
        <Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
   </Row>
   <Row>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div p-2 h-100'  style={{borderRadius:'7px'}}>
        <img src={require('../assets/pack/jammu.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration:  5 Nights / 6 Dayss</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Jammu & Kashmir Trip Packages</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.1em',fontWeight:'bold',paddingLeft:'2%'}}>INR 15,000 Per Person</span></Col>
        </Row>
        <Row>
           
        <Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div h-100 p-2'  style={{borderRadius:'7px'}}>
        <img src={require('../assets/pack/houseboat.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration:  4 Nights / 5 Days</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Houseboat Tour</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>
    

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.3em',fontWeight:'bold',paddingLeft:'2%'}}>INR 8,999 Per Person</span></Col>
        </Row>
        <Row>
<Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div h-100 p-2'  style={{borderRadius:'7px'}}>
        <img src={require('../assets/tourpackagesimages/tarsar.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration: 6 Nights / 7 Days</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Trekking Packages</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.3em',fontWeight:'bold',paddingLeft:'2%'}}>INR 10,000 Per Person</span></Col>
        </Row>
        <Row>
        <Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
    <Col sm={12} md={3} className='mb-4 mb-md-0'>
    <div className='tour-package-div h-100 p-2'  style={{borderRadius:'7px'}}>
        <img src={require('../assets/pack/corporate.jpg')}  style={{width:'99%',height:'250px',borderRadius:'10px'}} />
        <Row className='mt-2'>
            <Col><p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Duration: 4 Nights / 5 Days</p></Col>
        </Row>
        <p style={{textAlign:'left',color:'#333',fontSize:'1em',fontWeight:'bold',paddingLeft:'2%'}}>Kashmir Corporate Trip</p>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Srinagar - Naranag - Gangabal</span></Col>
        </Row>
        <Row style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'0.9em',fontWeight:'bold',paddingLeft:'2%'}}>Hotel. Sightseeing. Transport. Meals</span></Col>
        </Row>

        <Row  style={{textAlign:'left'}}>
            <Col><span style={{textAlign:'left',color:'#333',fontSize:'1.3em',fontWeight:'bold',paddingLeft:'2%'}}>INR 7000 Per Person</span></Col>
        </Row>
        <Row>
<Col>
  <button 
    onClick={() => document.getElementById('froForm').scrollIntoView({ behavior: 'smooth' })}
    style={{
      backgroundColor: '#ff9933',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      padding: '2% 15%',
      cursor: 'pointer'
    }}
  >
    Send Enquiry
  </button>
</Col>
            
        </Row>
        </div>
    </Col>
   </Row>
   </Row>
  
   </>
  )
}

export default TourPackage