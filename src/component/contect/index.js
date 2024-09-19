import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import Tu from '..//asset/imagessss.jfif';

function index() {
  return (
    <>
    <Header />
    <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                    <Image 
                        src={Tu}
                        alt="Contact Us" 
                        fluid 
                        className="rounded" 
                        style={{ maxHeight: '300px', objectFit: 'cover' }} 
                    />
                </Col>
                <Col md={6}>
                    <h1 className="text-center mb-4">Contact Us</h1>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="forM PHONE NO.">
                            <Form.Label>Phone no.</Form.Label>
                            <Form.Control type="PHONE NO." placeholder="Enter your phone no." />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Your message" />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    <Footer/>
    </>
  )
}

export default index




