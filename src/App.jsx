import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product"
import Product_Detail from "./pages/Product_Detail";
import About from "./pages/About"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product/>} />
      <Route path="/products/:id" element={<Product_Detail/>} />
      <Route path="/our-story" element={<About/>} />
    </Routes>

    </>
  );
};

export default App;
