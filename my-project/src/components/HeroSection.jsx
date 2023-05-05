import React from "react";
import logo from "../assets/constructora/logo.png";
import Image from "next/image";
// import exterior1 from "../assets/constructora/exterior1.jpg";
import style from "../styles/HeroSection.module.css";
import { useState, useEffect } from "react";

function HeroSection() {
  // const [isVisible, setIsVisible] = useState(false);

  // function handleScroll() {
  //   if (window.scrollY > 500) {
  //     setIsVisible(true);
  //   } else if (window.scrollY < 400) {
  //     setIsVisible(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className={`${style.hero} `}>
      <div className={`${style.colorOverlay} flex justify-center items-center`}>
        <h1 className="text-4xl font-bold text-white flex justify-center items-center not-italic ">
          Construyendo realidades Juntos
        </h1>
      </div>

      {/* Elemento div con color de fondo */}
      <Image className={style.img} src={logo} width={500} height={50}></Image>
      <div
        className={`${style.svg_hero} path svg-hero-light `}
        // className={`${style.svg_hero} path svg-hero-light ${
        //   isVisible ? "" : "hidden"
        // }`}
        style={{ height: "150px", overflow: "hidden" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C236.73,166.30 328.72,-26.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
