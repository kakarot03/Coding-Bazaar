import { Home } from "./pages/Home";
import Product from "./pages/Product";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.user.currentUser);
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
