import React from 'react'
import { Row, Col,Nav  } from 'react-bootstrap';
import Pic from '../asset/imag.jpg';




const footer = () => {
  return (
    <>
    <footer className="bg-dark text-light py-3">

<Row>
    <Col md={4}>
    <img src={Pic} style={{height:"150PX"}}></img>
<h6>style collection</h6>

    </Col>
    <Col md={4}>
        <h5>Quick Links</h5>
        <Nav className="flex-column">
        <Nav.Link href="/about">Home</Nav.Link>
        <Nav.Link href="/about">Product</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
        </Nav>
    </Col>
    <Col md={4}>
        <h5>Contact</h5>
        <p> phone: 9180854320</p>
        <p>Email: example@example.com</p>
    </Col>
</Row>
<Row className="text-center mt-3">
    <Col>
        <p>&copy; {new Date().getFullYear()} My Awesome App</p>
       
    </Col>
</Row>

</footer>
    </>
  )
}

export default footer
