import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import { Row, Col } from 'react-bootstrap';
import In from '../asset/in.avif';
import Photo from '../asset/download 4.webp';
import FE from '../asset/FE.webp';
import If from '../asset/if.webp';


function index() {
  return (
    <>
    <Header />
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

      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-left">
          <img
            src={If}
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


      <Row className="align-items-center">
        <Col md={6} className="text-left">
          <h1>EARRING</h1>
          <p>
          Earring components may be made of any number of materials, including metal, plastic, glass, precious stone, beads, wood, bone, and other materials. Designs range from small hoops and studs to large plates and dangling items. The size is ultimately limited by the physical capacity of the earlobe to hold the earring without tearing. However, heavy earrings worn over extended periods of time may lead to stretching of the earlobe and the piercing.
          </p>

        </Col>
        <Col md={6} className="text-right">
          <img
            src={FE}
            height={500}
            width={500}



          />
        </Col>
      </Row>

    <Footer />
    </>
  )
}

export default index


