import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../asset/logo.jfif';
import Fil from '../asset/fil.jfif';
import Asset from'../asset/rt.jfif';
import Lib from '../asset/download 3.jfif';
import Photo from '../asset/download 4.jfif'
import Panda from '../asset/download2.jfif'


function index() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Product</Nav.Link>
          <Nav.Link href="#link">contect</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      
    <Carousel>
      <Carousel.Item>
         <img src={Logo} height={500} width={1500}></img>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Asset}  height={500} width={1500}></img>                  
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Fil}  height={500} width={1100}></img>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <img src={Lib} ></img>  
    <img src={Photo}></img>  
    <img src={Panda}></img>  
   
   
    </div>
  )
}

export default index



