import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Photo from '../asset/download 4.webp';
import Lib from '../asset/download3.jfif';
import Logo from '../asset/LOGO.webp';
import Asset from '../asset/ASSET.jfif';
import ProfilePic from '../asset/download.jfif';
import Im from '../asset/im.webp';
import In from '../asset/in.avif';
import If from '../asset/if.webp';
import Ab from '../asset/ab.jfif';
import Ba from '../asset/ba.jfif';
import Cd from '../asset/cd.jfif';
import Tr from '../asset/TR.jfif';
import GH from '../asset/GH.jfif';
import IJ from '../asset/IJ.jpg';
import EF from '../asset/EF.jfif';
import FE from '../asset/FE.webp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function index() {
  return (
    <>
    <Header />
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tr} />
      <Card.Body>
        <Card.Title>BRACELET</Card.Title>
        <Card.Text>
         PRICE:135
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="right" src={Tr} />
      <Card.Body>
        <Card.Title>BRACELET</Card.Title>
        <Card.Text>
         PRICE:135
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tr} />
      <Card.Body>
        <Card.Title>BRACELET</Card.Title>
        <Card.Text>
         PRICE:135
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tr} />
      <Card.Body>
        <Card.Title>BRACELET</Card.Title>
        <Card.Text>
         PRICE:135
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tr} />
      <Card.Body>
        <Card.Title>BRACELET</Card.Title>
        <Card.Text>
         PRICE:135
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>

    
      <Card.Body>
        <Card.Title>BREACLET</Card.Title>
        <img src={IJ}/>
        <Card.Text></Card.Text>
        <Button variant="primary">Buy Now for </Button>
      </Card.Body>



      <Footer />

    </>
  )
}

export default index
