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
            <p>trekmeadows@gmail.com</p>

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



      <Modal size="lg" show={show} onHide={handleClose} centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>HAVE US CALL YOU BACK!</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='p-0'>
          <Row>
            <Col md={6} className='d-none d-md-block modal-bg-img rounded-start'>
              {/* <img src={require('../assets')} alt="Placeholder" /> */}
            </Col>
            <Col sm={12} md={6} className='d-flex justify-content-center align-items-center px-0 py-5 px-md-2 py-md-5'>
            <div className='border rounded p-4'>
            <h4 className='text-center text-dark'>Navratri Special</h4>
            <p className='text-dark'>Flat 40% off on Kashmir Tour Packages</p>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder='Your Name' id="fullName" name="fullName"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder='Email Id' id="emailId" name="emailId"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="tel" placeholder='Mobile No.' id="mobileNo" name="mobileNo"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Select Packages" id='package' name='package'>
                    <option>Select Packages</option>
                    <option value="Family Tour Package">Family Tour Package</option>
                    <option value="Honeymoon Tour Package">Honeymoon Tour Package</option>
                    <option value="Srinagar Tour Package">Srinagar Tour Package</option>
                    {/* Add other options here */}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="number" placeholder='No of Person' id="person" name="person" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Travel Month" id="TravelMonth" name="TravelMonth">
                    <option>Travel Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    {/* Add other months here */}
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                  Submit
                </Button>
              </Form>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
   



    </>
  )
}

export default MainFoot