import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Testimonial() {
  return (
    <Row className='div-contain bck1'>
    <Row>
        <Col><h2  className='custom-h2'>Our Happy Customers</h2></Col>
    </Row>
    <Row className=''>
   
        <Col sm={12} md={4} className='mb-4 mb-md-0'>
            <div className='testimonial-div h-100 border border-dark-subtle rounded'>
            <img src={require('../assets/qu.png')} className='test-quote-img' />
            <h3>Bharat Tank</h3>
                <p>Its was really good experience and the team was so nice. Affordable tour and travel operators in Jammu and Kashmir.</p>
             
            </div>
        </Col>
        <Col sm={12} md={4} className='mb-4 mb-md-0'>
        <div className='testimonial-div  border border-dark-subtle rounded'>
        <img src={require('../assets/qu.png')} className='test-quote-img' />
            <h3>Palanikumar Shunmugaraj</h3>
                <p>Over all experience with Kashmir Hikers for the KGL trek in July 2023 was very good. I was part of a small group. The arrangement made by Kashmir Hikers was good. </p>
            </div>
        </Col>
        <Col sm={12} md={4} className='d-none d-md-block mb-4 mb-md-0'>
        <div className='testimonial-div border border-dark-subtle rounded'>
        <img src={require('../assets/qu.png')} className='test-quote-img' />
            <h3>Vedant Rai</h3>
                <p>It’s wonderful to be in this secluded paradise tucked away in the alpine forest. All of my experiences with you guys — trekking, camping, dining, dancing around a campfire, sky full of star and picturesque scenery — made my day. Thanks Sajid & friends.</p>
            </div>
        </Col>
    </Row>
    <Row className='mt-4'>
        <Col sm={12} md={4}  className='mb-4 mb-md-0'>
            <div className='testimonial-div border border-dark-subtle rounded'>
            <img src={require('../assets/qu.png')} className='test-quote-img' />
            <h3>Kiran Patel</h3>
                <p>Went on to do great lakes Trek with the team, right from the pick up on day one till the last day there were looking on to us offering any help we required. Sajid is a kind person and they won’t charge anything extra than mentioned during enrolment. Will definitely enrol with them for my next winter Trek!!</p>
            </div>
        </Col>
        <Col sm={12} md={4}  className='mb-4 mb-md-0'>
        <div className='testimonial-div border border-dark-subtle rounded'>
        <img src={require('../assets/qu.png')} className='test-quote-img' />
            <h3>Farha Sultana</h3>
                <p>It was good experience for us to complete our KGL trek with kashmir hikers. Their staffs are so nice. Our cook Mr. Amzed bhai was so nice. So many special food we eat during our trek. Our guide Mr. Talib bhai he was so nice person. He is very young man but has a great experience of this trek. </p>
            </div>
        </Col>
        <Col sm={12} md={4}  className='d-none d-md-block mb-4 mb-md-0'>
        <div className='testimonial-div border border-dark-subtle rounded'>
        <img src={require('../assets/qu.png')} className='test-quote-img' />
            <h3>Nikhil Solanki</h3>
                <p>It was a very beautiful Trek and I did solo trip with this team and it was a wonderful experience, a lot of fun very beautiful and amazing trek, we thank u so much for this wonderful experience.</p>
            </div>
        </Col>
    </Row>
    </Row>
  )
}

export default Testimonial