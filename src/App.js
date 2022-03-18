
import React from 'react';
import { Routes, Route } from "react-router-dom";
import GlobalStyles from './Components/GlobalStyles/index'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import News from './Components/News'
import NewId from './Components/NewId.js'
import Seller from './Components/Seller.js'
import ProductInCategory from './Components/ProductInCategory.js'
import './Components/css/Style.css'
import './App.css'
import DetailProduct from './Components/Detail_Product.js'
import Cart from './Components/Cart';
import ShopingCart from './Components/ShopingCart';
import ThongBao from './Components/ThongBao';

function App() {
  const local = localStorage.getItem("countQuanity")
  return (
    <GlobalStyles>
      <div className="App">
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewId />} />
          <Route path="/:slug" element={<ProductInCategory />} />
          <Route path="/cart" element={local > 0 ? <ShopingCart/> : <ThongBao/>}/>
          <Route path="/product/:slug" element={<DetailProduct />} />
 
        </Routes>
        
        <Footer />
      </div>
    </GlobalStyles>
  );
}

export default App;
