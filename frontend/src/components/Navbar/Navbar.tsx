import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopify Logo"></img>
        <p>SHOPIFY</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          Shop {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          Men {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          Women {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          Kids {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  );
};
