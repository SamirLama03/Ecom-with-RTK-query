import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
