import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pic from '../asset/imag.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../asset/LOGO.webp';
import Asset from '../asset/ASSET.jfif';
import Fil from '../asset/fil.jfif';
import { Row, Col } from 'react-bootstrap';
import ProfilePic from '../asset/download.jfif';
import Photo from '../asset/download 4.webp';
import Lib from '../asset/download3.jfif';
import Im from '../asset/im.webp';
import In from '../asset/in.avif';
import If from '../asset/if.webp';


function header() {
  return (

      <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <img src={Pic} height={50} width={80}></img>
                    <Navbar.Brand href="#home">style.collection</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
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
                    <img src={Logo} height={500} width={1100}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Asset} height={500} width={1100}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Fil} height={500} width={1100}></img>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="align-items-center">
                <Col xs={12} md={6} className="text-left">
                    <img
                        src={In}
                        className="img-fluid"
                        height={500}
                        width={500}
                        style={{ marginTop: "12%", display: "inline-block;" }}
                    />
                </Col>
                <Col xs={12} md={6} className="text-left">
                <h1>LOCKET</h1>
                    <p>
                    Precious handmade lockets and locket necklaces for girls and women
                    </p>
                </Col>
            </Row>
            <img
                        src={Photo}
                        height={300}
                        width={300}
                    />

            
<img
                        src={Lib}
                        height={300}
                        width={300}
                    />

<img
                        src={Logo}
                        height={300}
                        width={300}
                    />


                    
<img
                        src={Asset}
                        height={300}
                        width={300}
                    />

<Carousel>
                <Carousel.Item>
                    <img src={Im} height={500} width={1100}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={In} height={500} width={1100}></img>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={If} height={500} width={1100}></img>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="align-items-center">
        <Col md={6} className="text-left">
          <h1>BRACELET</h1>
          <p>
          IF a bracelet is a single, inflexible loop, it is often called a bangle. When it is worn around the ankle it is called an ankle bracelet or anklet. A boot bracelet is used to decorate boots. Bracelets can be manufactured from metal, leather, cloth, plastic, bead or other materials, and jewelry bracelets sometimes contain jewels, rocks, wood, shells, crystals, metal, or plastic hoops, pearls and many more materials.
          </p>
          
        </Col>
        <Col md={6} className="text-right">
          <img
            src={Photo}
            height={500}
            width={500}
                        

            
          />
        </Col>
      </Row>
                    
      
    </div>
  )
}

export default header




