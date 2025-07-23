import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product"
import Product_Detail from "./pages/Product_Detail";
import About from "./pages/About"
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product/>} />
      <Route path="/products/:id" element={<Product_Detail/>} />
      <Route path="/our-story" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />

    </Routes>

    </>
  );
};

export default App;
