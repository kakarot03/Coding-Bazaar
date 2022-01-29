import { Home } from "./pages/Home";
import Product from "./pages/Product";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
