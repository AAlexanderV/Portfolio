// import React from "react";
import { useState } from "react";

export default function Header() {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [burgerMenuPressed, setBurgerMenuPressed] = useState(false);

  function headerHandler() {
    const fixHeight = window.innerHeight * 0.9;
    if (window.scrollY >= fixHeight && !headerFixed) {
      setHeaderFixed(true);
    } else if (window.scrollY < fixHeight && headerFixed) {
      setHeaderFixed(false);
    }
  }

  window.addEventListener("scroll", headerHandler);

  function toggleBurgerMenu() {
    if (burgerMenuPressed) {
      setBurgerMenuPressed(false);
    } else {
      setBurgerMenuPressed(true);
    }
  }
  function closeBurgerMenu() {
    if (burgerMenuPressed) {
      setBurgerMenuPressed(false);
    }
  }

  return (
    <header
      className={(headerFixed ? "header fixed" : "header") + (burgerMenuPressed ? " active" : "")}
    >
      <nav className={burgerMenuPressed ? "active" : ""}>
        <a
          href="#about"
          onClick={closeBurgerMenu}
        >
          About me
        </a>
        <a
          href="#skills"
          onClick={closeBurgerMenu}
        >
          Skills
        </a>
        <a
          href="#portfolio"
          onClick={closeBurgerMenu}
        >
          Portfolio
        </a>
        <a
          href="#contacts"
          onClick={closeBurgerMenu}
        >
          Contact me
        </a>
      </nav>
      {/* <!-- burger menu button --> */}
      <div
        className={burgerMenuPressed ? "nav_toggle active" : "nav_toggle"}
        onClick={toggleBurgerMenu}
      >
        <span className="toggle_item"></span>
      </div>
      {/* <!-- burger menu button --> */}
    </header>
  );
}
