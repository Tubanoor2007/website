import React from 'react'
import { Row, Col,Nav  } from 'react-bootstrap';




const footer = () => {
  return (
    <>
    <footer className="bg-dark text-light py-3">

<Row>
    <Col md={4}>
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
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
        <p>123 Main St, Anytown, USA</p>
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
