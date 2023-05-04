import React from "react";
import Link from "next/link";
import HeroSection from "./HeroSection";
// import Logo from "./Logo";
import { useState, useEffect } from "react";

import logo from "../assets/constructora/logo.blanco.png";
import Image from "next/image";

const AllLinks = () => [
  {
    path: "/",
    whereName: "Inicio",
  },
  {
    path: "/about",
    whereName: "Sobre Nosotros",
  },
  {
    path: "/contact",
    whereName: "Contacto",
  },
  {
    path: "/services",
    whereName: "Servicios",
  },
];

const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    console.log("Antes de cambiar el estado:", active);
    setActive(!active);
    console.log("Después de cambiar el estado:", active);
  };

  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (prevScrollY > currentScrollY) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = AllLinks().map((link) => (
    <Link href={link.path} key={link.whereName} legacyBehavior>
      <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
        {link.whereName}
      </a>
    </Link>
  ));

  return (
    <>
      <nav
        className={`flex items-center flex-wrap bg-black p-3 fixed top-0 left-0 w-full ${
          hideNav ? "hidden" : ""
        }`}
        style={{ transition: "all 0.3s ease-in-out", zIndex: 10 }} // Agrega esta línea
      >
        <Link href="/" legacyBehavior>
          <a className="inline-flex items-center p-2 mr-4">
            <Image src={logo} width={150}></Image>
          </a>
        </Link>
        <button
          className="inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
          aria-label="Menú"
          aria-expanded={active}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`w-full lg:inline-flex lg:flex-grow lg:w-auto ${
            active ? "" : "hidden"
          }`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            {links}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
