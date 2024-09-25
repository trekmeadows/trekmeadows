import React, {useState} from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import WorldwideForm from './WorldwideForm'

function Banner() {

 
  return (
    <>
   
    <Row className='div-contain-banner bck2' id='froForm'>
    {/* <Row  style={{textAlign:'left'}}>
    <Col><img src={require('../assets/Trek Meadows.png')} alt="Trek Meadows" style={{ width:'110px', height:'110px'}}  /></Col>
   </Row> */}
        <Col className='col-12 col-md-7' style={{textAlign:'left',justifyContent:'start',alignItems:'start'}}>
        <img src={require('../assets/Trek Meadows.png')} alt="Trek Meadows" style={{ width:'110px', height:'110px'}}  />
        <div className='banner-div-heading'>
            <h1 className='custom-h1'>Kashmir: A Dreamland of Majestic Mountains and Serene Lakes</h1>
            <p style={{color:'#fff',fontSize:'1.3em',fontWeight:'500'}}>Plan Your Jammu Kashmir Trip With Trek Meadows</p>
            </div>
        </Col>
        <Col className='col-12 col-md-5 d-flex flex-row-reverse'>
        <div className='left-aligned form-div'>
        <h3 className='custom-h3-form'>Customized Tour Packages</h3>
       <WorldwideForm />
       </div>
        </Col>
    </Row>
    </>
  )
}

export default Banner