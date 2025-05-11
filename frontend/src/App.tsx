import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Card from "./pages/Card";
import Footer from "./components/Footer/Footer";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/products" element={<Product />}></Route>
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
