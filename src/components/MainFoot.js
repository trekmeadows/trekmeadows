import React from 'react'
import { Col, Row } from 'react-bootstrap'

function MainFoot() {
  return (
    <>
    <Row  className="main-foot">

        <Col className='footer-top-border' style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <img 
                src={require('../assets/Trek Meadows.png')} 
                style={{ width: '60%', height: 'auto' }} 
                alt="Trek Meadows" 
            />
        </Col>

        <Col className='footer-top-border' >
            <h2  className='custom-h2'>Useful Links</h2>
            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'start' }}>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Privacy Policy</li>
</ul>

        </Col>
        <Col className='footer-top-border' >
            <h2 className='custom-h2'>Contact</h2>
            <p>Naranag Ganderbal 16, Srinagar, Jammu and Kashmir, 191202</p>
            <p>9103547682</p>
            <p>kashmirhikers4@gmail.com</p>

        </Col>
        <Col className='footer-top-border' >
            <h2 className='custom-h2'>Follow Us</h2>
            <div>
              <a href='https://www.facebook.com/people/Kashmir-Hikers/100080441106045/' target='_blank'><img src={require('../assets/fb.png')} style={{height:'auto',width:'12%',marginRight:'5px'}} /></a>
              <a href='https://www.instagram.com/kashmirhikers/' target='_blank'><img src={require('../assets/insta.png')} style={{height:'auto',width:'13%'}} /></a>
            </div>
        </Col>
    </Row>
    <Row style={{backgroundColor:'#cbe4f0',paddingTop:'1%'}}>
        <Col> <center><p><b>©2024. ALL RIGHTS RESERVED</b></p> </center> </Col>
    </Row>
    </>
  )
}

export default MainFoot