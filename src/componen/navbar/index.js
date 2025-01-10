import { useEffect, useState } from "react";
import "../../css/style.css";
import {
  ShoppingCart,
  Search,
  Menu,
  Trash2
} from "feather-icons-react/build/IconComponents";
import BeanCoffee from "../../img/products/1.jpg";
import { useCart } from "react-use-cart";
import Cart from "../Cart";
const Index = () => {
  const [OnActive, setOnActive] = useState(false);
  useEffect(() => {
    // toggle class active untuk luar
    const navbarNav = document.querySelector(".navbar-nav");
    const hb = document.querySelector("#hamburger-menu");
    const sb = document.querySelector("#search-button");
    const sf = document.querySelector(".search-form");
    const scb = document.querySelector("#shopping-cart-button");
    const sc = document.querySelector(".shopping-cart");

    document.addEventListener("click", (e) => {
      if (!hb.contains(e.target) && !navbarNav.contains(e.target))
        navbarNav.classList.remove("active");

      if (!sb.contains(e.target) && !sf.contains(e.target))
        sf.classList.remove("active");

      if (!scb.contains(e.target) && !sc.contains(e.target))
        sc.classList.remove("active");
    });
  }, []);

  const handleHamburger = () => {
    setOnActive(!OnActive);
  };

  const handleSearchButton = () => {
    const searchBox = document.querySelector("#search-box");
    searchBox.focus();
    setOnActive(!OnActive);
  };

  const handleShoppingCart = () => {
    setOnActive(!OnActive);
    const OpenCart = document.querySelector(".shopping-cart");
    if (!OnActive) {
      return OpenCart.classList.add("active");
    } else {
      return OpenCart.classList.remove("active");
    }
  };
  const { isEmpty, totalItems } = useCart();
  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          kenangan<span>senja</span>.
        </a>
        <div className={!OnActive ? "navbar-nav" : "navbar-nav active"}>
          <a href="/">Home </a>
          <a href="#about">Tentang Kami </a>
          <a href="#menu">Menu</a>
          <a href="#products">Produk</a>
          <a href="#contact">Kontak</a>
        </div>

        <div className="navbar-extra">
          <a
            href="/"
            id="search-button"
            onClick={(e) => handleSearchButton(e.preventDefault())}
          >
            <Search />
          </a>
          <a
            href="#"
            id="shopping-cart-button"
            onClick={(e) => handleShoppingCart(e.preventDefault())}
          >
            <ShoppingCart />
            {!isEmpty && <span className="quantity-badge">{totalItems}</span>}
          </a>
          <a
            id="hamburger-menu"
            onClick={() => handleHamburger((e) => e.preventDefault())}
          >
            <Menu />
          </a>
        </div>

        {/* Search  form start */}
        <div className={!OnActive ? "search-form" : "search-form active"}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box">
            <Search />
          </label>
        </div>
        {/* Search form end */}

        {/* Shopping cart start */}
        <Cart className="shopping-cart" />

        {/* Shopping cart end */}
      </nav>
    </div>
  );
};
<script src="js/script.js"></script>;
export default Index;
