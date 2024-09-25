import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Camera, CarTaxiFront,Plane, HandPlatter } from 'lucide-react';

function Blogs() {
  return (
    <>
    
    
 <Row className='div-contain-inner bck1'>
 <h3 className='custom-h2'>Our Featured Blogs</h3>
    <Col sm={12} md={4}  className='mb-2 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'10px'}}>
        <img src={require('../assets/blog/4.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1.1em',fontWeight:'bold'}}>Kashmir tour packages from Delhi</h3>
        <a href="">Read More</a>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4} className='mb-2 mb-md-0'>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'10px'}}>
        <img src={require('../assets/blog/6.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1.1em',fontWeight:'bold'}}>Kashmir tour packages from Bangalore</h3>
        <a href="">Read More</a>
        </div>
      
    </div>
    </Col>
    <Col sm={12} md={4}>
    <div style={{borderWidth:'1px',borderColor:'grey',borderStyle:"solid",borderRadius:'10px'}}>
        <img src={require('../assets/blog/5.webp')} className='' style={{width:'100%',height:'240px', borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} />
        <div style={{}} className='p-3'>
        <h3 style={{fontSize:'1.1em',fontWeight:'bold'}}>Kashmir tour packages from Mumbai</h3>
        <a href="">Read More</a>
        
        </div>
      
    </div>
    </Col>
  
    </Row>
  
   
  
    </>
   
  )
}

export default Blogs