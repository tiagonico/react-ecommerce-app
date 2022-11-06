import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}  />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList/>}  />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product/>}  />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart/>}  />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}  />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register/>}  />
      </Routes>
    </Router>
  )
}

export default App