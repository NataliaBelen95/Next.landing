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
      {/* <div className={`${style.colorOverlay} flex justify-center items-center`}>
        {" "}
      </div> */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <div className="flex justify-center mx-auto ">
            <img
              src="/logo/logo.png"
              className={style.img_hero}
              style={{ width: "50%" }}
            />
          </div>
          <p className={`text-3xl mt-8 font-bold ${style.text_left}`}>
            {" "}
            Construyendo Realidades Juntos
          </p>
          <h1 className={`my-4 text-5xl font-bold ${style.text_left}`}></h1>
        </div>
      </div>
      <div
        className={style.svg_hero}
        style={{ height: "120px", overflow: "hidden" }}
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
