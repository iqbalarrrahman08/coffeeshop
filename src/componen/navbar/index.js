import { useEffect, useState } from "react";
import "../../css/style.css";
import {
  ShoppingCart,
  Search,
  Menu
} from "feather-icons-react/build/IconComponents";
const Index = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const navbarNav = document.querySelector(".navbar-nav");
    const hamburger = document.querySelector("#hamburger-menu");
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
        navbarNav.classList.remove("active");
    });
  }, []);
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          kenangan<span>senja</span>.
        </a>
        <div className={isActive ? "navbar-nav active" : "navbar-nav"}>
          <a href="#">Home </a>
          <a href="#about">Tentang Kami </a>
          <a href="#menu">Menu</a>
          <a href="#contact">Kontak</a>
        </div>

        <div className="navbar-extra">
          <a href="#" id="search">
            <Search />
          </a>
          <a href="#" id="shopping-cart">
            <ShoppingCart />
          </a>
          <a
            href="#"
            id="hamburger-menu"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <Menu />
          </a>
        </div>
      </nav>
    </div>
  );
};
<script src="js/script.js"></script>;
export default Index;
