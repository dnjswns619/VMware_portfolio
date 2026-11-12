import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const Header = () => {
  const [headerState, setHeaderState] = useState(true);
  const toogleHeader = () => {
    setHeaderState(!headerState)
    if (headerState) {
      document.body.classList.add("on");
    } else {
      document.body.classList.remove("on");
    }
  }
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    if(headerState !== undefined && !headerState) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    }
  }, [headerState])
  return (
    <header className={headerState ? "header" : "header on"}>
      <h1 className="header__logo">
        <a href="#intro">Jun's Web Portfolio</a>
      </h1>
      <nav className="header__nav nav">
        <ul className="nav__wrap">
          <li className="nav__item">
            <a href="#about">About</a>
          </li>
          <li className="nav__item">
            <a href="#port">Portfolio</a>
          </li>
          <li className="nav__item">
            <a href="#work">Work</a>
          </li>
        </ul>
      </nav>
      <div className="header__hamburger">
        <button className="header__hamburger--wrap" onClick={toogleHeader}>
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </button>
      </div>
      <div className="header__mobileMenu">
        <ul className="header__mobileMenu--wrap">
          <li className="header__mobileMenu--item item">
            <a className="item__link" href="#about" onClick={toogleHeader}>About</a>
          </li>
          <li className="header__mobileMenu--item item">
            <a className="item__link" href="#port" onClick={toogleHeader}>Portfolio</a>
          </li>
          <li className="header__mobileMenu--item item">
            <a className="item__link" href="#work" onClick={toogleHeader}>Work</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;