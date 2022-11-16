// import React from "react";
import { useState } from "react";

export default function Header() {
    const [headerFixed, setHeaderFixed] = useState(false);

    function headerHandler() {
        const innerHeight = window.innerHeight * 0.8;
        if (window.scrollY >= window.innerHeight && !headerFixed) {
            setHeaderFixed(true);
        } else if (window.scrollY < innerHeight && headerFixed) {
            setHeaderFixed(false);
        }
    }

    window.addEventListener("scroll", headerHandler);

    return (
        <header className={headerFixed ? "header fixed" : "header"}>
            <nav>
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contacts">Contact me</a>
            </nav>
        </header>
    );
}
