
import './Components/css/Style.css'
import './App.css'
import React from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";
import DetailProduct from './Components/Detail_Product.js'
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/product/:slug" element={<DetailProduct />} />
    </Routes>

</div>
  );
}

export default App;
