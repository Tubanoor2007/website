
import './App.css';
import Home from './component/home';
import About from './component/about'
import Product from './component/product';
import Contect from './component/contect';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path="Prodect" element={<Product />} />
          <Route path="contect" element={<Contect />} />
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
