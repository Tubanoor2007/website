
import './App.css';
import Home from './component/home';
import About from './component/about'
import Product from './component/product';
import Contect from './component/contect';
import Login from './component/Login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
     {/* <Login />  */}
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path="Prodect" element={<Product />} />
          <Route path="contect" element={<Contect />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      

{/* 
      <Home />
      <About />
      <Product />
      <Contect /> */}
    </>


  );
}
export default App;
