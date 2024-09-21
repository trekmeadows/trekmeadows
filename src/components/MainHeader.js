import React from 'react'
import { Col, Row } from 'react-bootstrap'

function MainHeader() {
  return (
   <Row style={{textAlign:'left',zIndex:99}}>
    <Col><img src={require('../assets/Kashmir Hikers.png')} style={{width:'10%',height:'auto',alignItems:'flex-start',justifyContent:'left'}} /></Col>
   </Row>
  )
}

export default MainHeader