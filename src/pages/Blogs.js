import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Blogs() {
  return (
    <Container fluid>
        <Row className='' style={{backgroundColor:'#f2664f'}}>
            <Col>
                <h1 className='text-light'>Latest Travel Blogs</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default Blogs