import React from "react";
import logo from "../assets/constructora/logo.png";
import Image from "next/image";
// import exterior1 from "../assets/constructora/exterior1.jpg";
import style from "../styles/HeroSection.module.css";

function HeroSection() {
  return (
    <section className={`${style.hero} `}>
      <div className={`${style.colorOverlay} flex justify-center items-center`}>
        <h1 className="text-4xl font-bold text-white flex justify-center items-center not-italic ">
          Construyendo realidades Juntos
        </h1>
      </div>

      {/* Elemento div con color de fondo */}
      <Image className={style.img} src={logo} width={500} height={50}></Image>
    </section>
  );
}

export default HeroSection;
