import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { ShoppingBag } from 'lucide-react';

function ThingsToDo2() {
  return (
    <Row  className='div-contain bck1'>
        <Col sm={12} md={4}>
            <h2  className='custom-h2'>Things to do in Kashmir</h2>
        </Col>
        <Col sm={12} md={8} className='d-inline d-md-flex'>
       {/* <Row>
        <Col className='border border-dark-subtle rounded bg-light'><span>Attraction</span>   <span style={{backgroundColor:'red',borderRadius:'25px',padding:'7px'}}><ShoppingBag color="white" size={25} /></span> </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
       </Row> */}
        <div className='col-6 col-md-auto bg-light' style={{borderWidth:'1px',borderColor:'grey',borderStyle:'solid',borderRadius:'25px',padding:'12px',margin:'10px'}}><span>Attraction</span>   <span style={{backgroundColor:'red',borderRadius:'25px',padding:'7px'}}><ShoppingBag color="white" size={25} /></span> </div>
        <div className='col-6 col-md-auto bg-light' style={{borderWidth:'1px',borderColor:'grey',borderStyle:'solid',borderRadius:'25px',padding:'12px',margin:'10px'}}><span>Activities</span>   <span style={{backgroundColor:'yellow',borderRadius:'25px',padding:'7px'}}><ShoppingBag color="white" size={25} /></span> </div>
        <div className='col-6 col-md-auto bg-light' style={{borderWidth:'1px',borderColor:'grey',borderStyle:'solid',borderRadius:'25px',padding:'12px',margin:'10px'}}><span>Shopping</span>   <span style={{backgroundColor:'orange',borderRadius:'25px',padding:'7px'}}><ShoppingBag color="white" size={25} /></span> </div>
        <div className='col-6 col-md-auto bg-light' style={{borderWidth:'1px',borderColor:'grey',borderStyle:'solid',borderRadius:'25px',padding:'12px',margin:'10px'}}><span>Food Item</span>   <span style={{backgroundColor:'brown',borderRadius:'25px',padding:'7px'}}><ShoppingBag color="white" size={25} /></span> </div>
        <div className='col-6 col-md-auto bg-light' style={{borderWidth:'1px',borderColor:'grey',borderStyle:'solid',borderRadius:'25px',padding:'12px',margin:'10px'}}><span>Night Life</span>   <span style={{backgroundColor:'blue',borderRadius:'25px',padding:'7px'}}><ShoppingBag color="white" size={25} /></span> </div>
        </Col>
    </Row>
  )
}

export default ThingsToDo2