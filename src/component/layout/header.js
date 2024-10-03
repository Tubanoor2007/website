import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pic from '../asset/imag.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toggle from "react-bootstrap/ToggleButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function header() {

    return (

        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <img src={Pic} height={50} width={80}></img>
                    <Navbar.Brand href="#home">style.collection</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder=" search jewellery"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">search</Button>
                    </Form>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end  ml-3 ">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Product</Nav.Link>
                            <Nav.Link href="#link">contect</Nav.Link>
                            
                           
                        </Nav>
                    </Navbar.Collapse>
                    <Row>
                <Col className="text-end"> {/* Aligns content to the right */}
                    <Button variant="primary" className="rounded-pill">
                        Login
                    </Button>
                </Col>
            </Row>
                </Container>
            </Navbar>
           
        
       
            

        </>







    )
}

export default header  




