import React, { useState, useRef } from 'react'
import { Button, Col, Modal, Row, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function MainFoot({ show, handleClose, handleShow}) {
 

    const form = useRef();
    const navigation = useNavigate();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_frzr50c', 'template_1be65wb', form.current, {
          publicKey: '6WbtcVKePaX_WgD1j',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            navigation('/thankyou');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <>
    <Row  className="main-foot">

        <Col sm={12} md={3} className='footer-top-border' style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <img 
                src={require('../assets/Trek Meadows.png')} 
                style={{ width: '40%', height: 'auto' }} 
                alt="Trek Meadows" 
            />
        </Col>

        <Col sm={12} md={3} className='footer-top-border' >
            <h2  className='custom-h2 mb-1'>Useful Links</h2>
            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'start' }}>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Privacy Policy</li>
</ul>

        </Col>
        <Col sm={12} md={3} className='footer-top-border' >
            <h2 className='custom-h2 mb-1'>Contact</h2>
            <p>Naranag Ganderbal 16, Srinagar, Jammu and Kashmir, 191202</p>
            <p>9103547682</p>
            <p>kashmirhikers4@gmail.com</p>

        </Col>
        <Col sm={12} md={3} className='footer-top-border' >
            <h2 className='custom-h2 mb-1'>Follow Us</h2>
            <div>
              <a href='https://www.facebook.com/people/Kashmir-Hikers/100080441106045/' target='_blank'><img src={require('../assets/fb.png')} style={{height:'auto',width:'12%',marginRight:'5px'}} /></a>
              <a href='https://www.instagram.com/kashmirhikers/' target='_blank'><img src={require('../assets/insta.png')} style={{height:'auto',width:'13%'}} /></a>
            </div>
        </Col>
    </Row>
    <Row style={{backgroundColor:'#cbe4f0',paddingTop:'1%'}}>
        <Col> <center><p><b>©2024. ALL RIGHTS RESERVED</b></p> </center> </Col>
    </Row>
    <Row className='d-md-none sticky-bottom'>
        <Col className='col-6 bg-primary p-0'><Button className='w-100' onClick={handleShow}>Send Enquire</Button></Col>
        <Col className='col-6 bg-warning p-0'><a href={`tel:9103547682`} className='w-100 btn btn-warning'>Call Us</a></Col>
        
    </Row>



    <Modal show={show} onHide={handleClose} centered style={{backgroundColor:'transparent'}} >
         <Modal.Header closeButton>
       
        </Modal.Header> 
        <Modal.Body closeButton>
        <Row>
          <Col sm={12} md={6}>
            <img src='' />
          </Col>
          <Col sm={12} md={6}>
          <h4>HAVE US CALL YOU BACK!</h4>
          <Form ref={form} onSubmit={sendEmail}>
<Row>
       
        <Col className='col-12 mb-3'>
    <Form.Control type="text" placeholder='Your Name' id="fullName" name="fullName"/>
    </Col>
    <Col className='col-12 mb-3'>
    <Form.Control type="email" placeholder='Email Id' id="emailId" name="emailId"/>
    </Col>
    <Col className='col-12 mb-3'>
    <Form.Control type="tel" placeholder='Mobile No.' id="mobileNo" name="mobileNo"/>
    </Col>
    <Col className='col-12 mb-3'>
    <Form.Select aria-label="Default select example" id='package' name='package'>
      <option>Select Packages</option>
      <option value="Family Tour Package">Family Tour Package</option>
      <option value="Honeymoon Tour Package">Honeymoon Tour Package</option>
      <option value="Srinagar Tour Package">Srinagar Tour Package</option>
      <option value="Kashmir Great Lakes Trek Package">Kashmir Great Lakes Trek Package</option>
      <option value="Naranag Gangabal Trek Package">Naranag Gangabal Trek Package</option>
      <option value="Kashmir Exotic Tour Package">Kashmir Exotic Tour Package</option>
      <option value="Solo Tour Package">Solo Tour Package</option>
      <option value="Group Tour Package">Group Tour Package</option>
      <option value="Romantic Tour Package">Romantic Tour Package</option>
      
     
    </Form.Select>
    </Col>
    <Col className='col-12 mb-3'>
    <Form.Control type="number" placeholder='No of Person' id="person" name="person" />
    </Col>
    <Col className='col-12 mb-3'>
    <Form.Select aria-label="Default select example" className='w-100' id="TravelMonth" name="TravelMonth">
    <option>Travel Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
    </Form.Select>
    </Col>
    <Col>
    <Button variant="primary" type="submit" className='w-100'>
        Submit
      </Button>
      </Col>
    
      </Row>
</Form> 
          </Col>
        </Row>
       
        </Modal.Body>
    
      </Modal>
    </>
  )
}

export default MainFoot