import React from 'react'
import { Col, Row } from 'react-bootstrap'

function MainFooter() {
  return (
    <div className='div-contain' style={{borderTopWidth:'1px',borderWidthcolor:'#fff',borderTopStyle:'solid'}}>
     <Row>
            <Col md={3}>
                <img src={require('../assets/Kashmir Hikers.png')} style={{height:'auto',width:'55%'}} />
            </Col>
            <Col md={3}>
            <h4 className='custom-h4'>Contact Us</h4>
            <p>9103547682<br/>
           kashmirhikers4@gmail.com</p>
            
            </Col>
            <Col md={3}>
            <h4 className='custom-h4'>Office Address</h4>
            <p>Naranag, Kangan, Srinagar, Jammu and Kashmir, 191202</p>
            </Col>
            <Col md={3}>
            <h4 className='custom-h4'>FOLLOW US</h4>
            <div>
              <a href='https://www.facebook.com/people/Kashmir-Hikers/100080441106045/' target='_blank'><img src={require('../assets/fb.png')} style={{height:'auto',width:'15%',marginRight:'5px'}} /></a>
              <a href='https://www.instagram.com/kashmirhikers/' target='_blank'><img src={require('../assets/insta.png')} style={{height:'auto',width:'17%'}} /></a>
            </div>
            </Col>  
        </Row>
        {/* <Row style={{borderTopWidth:'1px',borderWidthcolor:'#d9d9db',borderTopStyle:'solid'}}>
        <Col md={8}>
            <h3 className=''>Registered with J&K Tourism</h3>
            <p className=''>Kashmir Hiker is registered with Jammu & Kashmir Tourism (Goverenment of J & K) under registration number JKEA00002393</p>
        </Col>
        <Col md={4}><img src={require('../assets/jammu-and-kashmir-tourism-logo.png')} className='footer-img' /></Col>
        </Row> */}
       
        <Row style={{borderTopWidth:'1px',borderWidthcolor:'#d9d9db',borderTopStyle:'solid'}}>
          <Col className='pt-2'>
          <p>© 2024 Kashmir Hikers. All rights reserved.</p>
          </Col>
        </Row>
    </div>
  )
}

export default MainFooter