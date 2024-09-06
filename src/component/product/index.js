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


function index() {
  return (
    <>
    <Header />
    <img
        src={Photo}
        height={300}
        width={300}
        style={{padding:"2%"}}
    
      />


      <img
        src={Lib}
        height={300}
        width={300}
        style={{padding:"2%"}}
      />

      <img
        src={Logo}
        height={300}
        width={300}
        style={{padding:"2%"}}
      />



      <img
        src={Asset}
        height={300}
        width={300}
        style={{padding:"2%"}}
    
      />
       <img
        src={ProfilePic}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;" ,padding:"2%"}}
      />


      <img
        src={Im}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />

      <img
        src={In}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />



      <img
        src={If}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />
 <img
        src={Tr}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />


      <img
        src={Ab}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;" ,padding:"2%"}}
      />

      <img
        src={Ba}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />



      <img
        src={Cd}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />


<img
        src={EF}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />
 <img
        src={GH}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;",padding:"2%" }}
      />


      <img
        src={IJ}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;", padding:"2%"}}
      />

      <img
        src={FE}
        height={300}
        width={300}
        style={{ marginTop: "12%", display: "inline-block;", padding:"2%"}}
      />



     







      <Footer />

    </>
  )
}

export default index
