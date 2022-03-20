
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import GlobalStyles from './Components/GlobalStyles/index'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import PageNews from './Components/PageNews'
import NewId from './Components/NewId.js'
import GetOrder from './Components/GetOrder.js'
import ProductInCategory from './Components/ProductInCategory.js'
import './Components/css/Style.css'
import './App.css'
import DetailProduct from './Components/Detail_Product.js'
import ShopingCart from './Components/ShopingCart';
import axios from 'axios'
function App() {

  const [categorys, setCategorys] = useState([])
  const [news, setNews] = useState([])
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const categorys = await axios.get('https://sever-coffeehouse.herokuapp.com/getCategories')
    const products = await axios.get(`https://sever-coffeehouse.herokuapp.com/bestseller12`)
    const news = await axios.get('https://sever-coffeehouse.herokuapp.com/news')
    setCategorys(categorys.data.dataCategories);
    setNews(news.data.dataPosts);
    setProducts(products.data.dataBestseller);
  }, [])
  //
  return (
    <GlobalStyles >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home categorys={categorys} products={products} news={news} />} />
          <Route path="/news" element={<PageNews news={news} />} />
          <Route path="/news/:slug" element={<NewId />} />
          <Route path="/:slug" element={<ProductInCategory categorys={categorys} />} />
          <Route path="/product/:slug" element={<DetailProduct />} />
          <Route path="/tracuudonhang" element={<GetOrder />} />
          <Route path="/cart" element={<ShopingCart />} />
        </Routes>

        <Footer />
      </div>
    </GlobalStyles>


  );
}

export default App;
