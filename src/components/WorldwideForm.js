import React, { useState, useRef  } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const WorldwideForm = () => {
  const form = useRef();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+1',
    isWhatsappAvailable: 'no',
    arrivalMonth: '',
    numMembers: '',
    travelPlan: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_frzr50c', 'template_1be65wb', form.current, '6WbtcVKePaX_WgD1j')
      .then((result) => {
          console.log(result.text);
          navigation('/thankyou');
      }, (error) => {
          console.log(error.text);
          alert('Failed to Send Message');
      });
  };

  return (
    <Form ref={form} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formGroupFullName">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" name="user_name" placeholder="Enter your full name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPhone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="tel" name="user_phone" placeholder="Enter your Phone" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="user_email" placeholder="Enter your email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPackage">
      <Form.Label>Select your Package</Form.Label>
      <Form.Select name="user_package">
        <option>Packages</option>
        <option value="Kashmir Family Packages">Kashmir Family Packages</option>
        <option value="Kashmir Group Packages">Kashmir Group Packages</option>
        <option value="Kashmir Honeymoon Package">Kashmir Honeymoon Package</option>
        <option value="Kashmir Solo Tour Packages">Kashmir Solo Tour Packages</option>
        <option value="Jammu & Kashmir Trip Packages">Jammu & Kashmir Trip Packages</option>
        <option value="Kashmir Houseboat Tour">Kashmir Houseboat Tour</option>
        <option value="Kashmir Trekking Packages">Kashmir Trekking Packages</option>
        <option value="Kashmir Corporate Trip">Kashmir Corporate Trip</option>
      </Form.Select>
    </Form.Group>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridArrivalMonth">
        <Form.Label>Arrival Month</Form.Label>
        <Form.Select name="user_arrival_month">
          <option>Select Month</option>
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
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPax">
        <Form.Label>No: of Pax</Form.Label>
        <Form.Select name="user_pax">
          <option>Number of Members</option>
          {/* Add other options for number of members */}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/* Add more options as needed */}
        </Form.Select>
      </Form.Group>
    </Row>
    <Button style={{backgroundColor:'#ff9933', border:'none'}} type="submit" className='w-100'>
      Send Enquiry
    </Button>
  </Form>
  );
};

export default WorldwideForm;