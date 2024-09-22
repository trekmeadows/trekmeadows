import React, { useRef } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import KashmirTabs from '../components/KashmirTabs';
import BestTravel2 from '../components/BestTravel2';
import AboutTrek from '../components/AboutTrek';
import AboutKashmir2 from '../components/AboutKashmir2';
import TourPackages2 from '../components/TourPackages2';
import TravelDestination from '../components/TravelDestination';
import ThingsToDo from '../components/ThingsToDo';
import ThingsToDo2 from '../components/ThingsToDo2';
import ReachKashmir from '../components/ReachKashmir';
import TourGallery from '../components/TourGallery';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import FAQ2 from '../components/FAQ2';
import Blogs from '../components/Blogs';
import MainFoot from '../components/MainFoot';
import MainHead from '../components/MainHead';
import { PhoneCallIcon } from 'lucide-react';
import WhyChoose from '../components/WhyChoose';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

// import '../App.css';

function Home() {
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
    <Container fluid className=''>
    <MainHead />
    {/* <Row className="d-flex align-items-center justify-content-between" style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
  <Col className="d-flex align-items-center" xs="auto">
    <img 
      src={require('../assets/Trek Meadows.png')} 
      alt="Logo"
      style={{ width: '100px', height: 'auto' }}
    />
  </Col>
  <Col className="d-flex align-items-center" xs="auto">
    <PhoneCallIcon color="black" size={20} />
    <p style={{ margin: '0 10px' }}>+91 9103547682</p>
    <Button variant="outline-secondary">Talk to Us</Button>
  </Col>
</Row> */}

   <Row className='homeDiv'>
   
   <Container  className='homeDiv2'>

   <p className='homeDiv2P'>Have Queries?
   Fill in the form below & get the best deals.</p>
<Form ref={form} onSubmit={sendEmail}>
<Row>
       
        <Col className='p-0 m-0'>
    <Form.Control type="text" placeholder='Your Name' id="fullName" name="fullName"/>
    </Col>
    <Col className='p-0 m-0'>
    <Form.Control type="email" placeholder='Email Id' id="emailId" name="emailId"/>
    </Col>
    <Col className='p-0 m-0'>
    <Form.Control type="tel" placeholder='Mobile No.' id="mobileNo" name="mobileNo"/>
    </Col>
    <Col className='p-0 m-0'>
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
    <Col className='p-0 m-0'>
    <Form.Control type="number" placeholder='No of Person' id="person" name="person" />
    </Col>
    <Col className='p-0 m-0'>
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
</Container>

   </Row>
   {/* <center > */}
<KashmirTabs />
 {/* </center> */}
<AboutTrek />
<AboutKashmir2 />
<WhyChoose />
<TourPackages2 />
<TravelDestination />
{/* <ThingsToDo /> */}
<ThingsToDo2 />
<ReachKashmir />
<TourGallery />
<Testimonial />
<FAQ2 />
<Blogs />
<MainFoot />
   </Container>
  )
}

export default Home