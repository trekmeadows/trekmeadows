import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { ShoppingBag } from 'lucide-react';

function ThingsToDo2() {
  return (
    <Row  className='div-contain bck1'>
        <Col sm={12} md={4}>
            <h2  className='custom-h2'>Things to do in Kashmir</h2>
        </Col>
        <Col sm={12} md={8} className='d-block d-md-flex px-0 px-md-1'>
       {/* <Row>
        <Col className='border border-dark-subtle rounded bg-light'><span>Attraction</span>   <span style={{backgroundColor:'red',borderRadius:'25px',padding:'7px'}}><ShoppingBag color="white" size={25} /></span> </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
       </Row> */}
        <div className='col-6 col-md-auto bg-light border border-secondary rounded-5  p-3 m-1 m-md-2 d-inline'><span>Attraction</span>          <img src={require('../assets/things/cam.jpeg')} width={30} style={{backgroundColor:'white',borderRadius:'25px',padding:'1px'}} /> </div>
        <div className='col-6 col-md-auto bg-light border border-secondary rounded-5  p-3 m-1 m-md-2 d-inline-block'><span>Activities</span>    <img src={require('../assets/things/act.jpeg')} width={30} style={{backgroundColor:'white',borderRadius:'25px',padding:'1px'}} /> </div>
        <div className='col-6 col-md-auto bg-light border border-secondary rounded-5  p-3 m-1 m-md-2 d-inline'><span>Shopping</span>            <img src={require('../assets/things/bag.jpeg')} width={30} style={{backgroundColor:'white',borderRadius:'25px',padding:'1px'}} /> </div>
        <div className='col-6 col-md-auto bg-light border border-secondary rounded-5  p-3 m-1 m-md-2 d-inline-block'><span>Food Item</span>     <img src={require('../assets/things/bask.jpeg')} width={30} style={{backgroundColor:'white',borderRadius:'25px',padding:'1px'}} /> </div>
        <div className='col-5 col-md-auto bg-light border border-secondary rounded-5  p-3 m-1 m-md-2 d-inline-block'><span>Night Life</span>    <img src={require('../assets/things/night.jpeg')} width={30} style={{backgroundColor:'white',borderRadius:'25px',padding:'1px'}} /> </div>
        <div className='col-6 col-md-auto bg-light border border-secondary rounded-5  p-3 m-1 m-md-2 d-inline-block'><span>Hiking</span>        <img src={require('../assets/things/hik.png')} width={30} style={{backgroundColor:'white',borderRadius:'25px',padding:'1px'}} /> </div>
        </Col>
    </Row>
  )
}

export default ThingsToDo2