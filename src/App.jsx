import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product"
import Product_Detail from "./pages/Product_Detail";


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product/>} />
      <Route path="/products/:id" element={<Product_Detail/>} />
    </Routes>

    </>
  );
};

export default App;
