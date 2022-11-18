// import React from "react";
import { useState } from "react";

export default function Header() {
    const [headerFixed, setHeaderFixed] = useState(false);
    const [burgerMenuPressed, setBurgerMenuPressed] = useState(false);

    function headerHandler() {
        const innerHeight = window.innerHeight * 0.8;
        if (window.scrollY >= window.innerHeight && !headerFixed) {
            setHeaderFixed(true);
        } else if (window.scrollY < innerHeight && headerFixed) {
            setHeaderFixed(false);
        }
    }

    window.addEventListener("scroll", headerHandler);

    // menu_btn.addEventListener("click", function () {
    //     if (! menu_btn.classList.contains("active")){
    //         // чтобы сделать актив = крестик
    //         menu_btn.classList.add("active");
    //         // присвоить актив для нав_2
    //         menu_nav.classList.add("active");
    //         header_slogan.classList.add("hide");
    //         header.classList.add("red");
    //         header_logo.classList.add("white");
    //     }
    //     else {
    //         // чтобы убрать актив = три полоски
    //         menu_btn.classList.remove("active");
    //         // убрать актив для нав_2
    //         menu_nav.classList.remove("active");
    //         header_slogan.classList.remove("hide");
    //         header.classList.remove("red");
    //     }
    // });

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
        <header className={headerFixed ? "header fixed" : "header"}>
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
                class={burgerMenuPressed ? "nav_toggle active" : "nav_toggle"}
                onClick={toggleBurgerMenu}
            >
                <span class="toggle_item"></span>
            </div>
            {/* <!-- burger menu button --> */}
        </header>
    );
}
