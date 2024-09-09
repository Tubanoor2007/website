import React from 'react'
import Header from '../layout/header';
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
import Footer from '../layout/footer';

const index = () => {
  return (
    <>
      < Header />

      <Carousel>
        <Carousel.Item>
          <img src={Logo} height={500} width={1600}></img>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Asset} height={500} width={1600}></img>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={If} height={500} width={1600}></img>
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
          <img src={Im} height={500} width={1600}></img>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={In} height={500} width={1600}></img>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={If} height={500} width={1600}></img>
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


    <Footer />

    </>
  )
}

export default index



