import React from 'react'
import { Container, Form, Button,Card } from 'react-bootstrap';


function login() {
  return (
   <>
    
   
   <Container  className="mt-5 d-flex justify-content-center">
            <Card  bg="info" text="white" style={{ width: '300px', height:'300px' }}>
                <Card.Body>
                    <Card.Title className="text-center">Login</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="light" type="submit" className="mt-3">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
   </>
  )
}

export default login
