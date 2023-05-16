import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import logo from "../assets/constructora/logo.blanco.png";
import Image from "next/image";

const AllLinks = (currentPath) => {
  const links = [
    {
      path: "/",
      whereName: "Inicio",
    },
    {
      path: "/obras",
      whereName: "Nuestras Obras",
    },
  ];

  if (currentPath !== "/obras") {
    links.push(
      {
        path: "#about",
        whereName: "Sobre Nosotros",
      },
      {
        path: "#contact",
        whereName: "Contacto",
      }
    );
  }

  return links;
};

const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [hideNav, setHideNav] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      let prevScrollY = window.pageYOffset;

      const handleScroll = () => {
        const currentScrollY = window.pageYOffset;

        if (currentScrollY > prevScrollY && currentScrollY > 100) {
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
    } else {
      setHideNav(false);
    }
  }, [router.pathname]);

  const currentPath = router.pathname;

  const links = AllLinks(currentPath).map((link) => (
    <Link href={link.path} key={link.whereName} legacyBehavior>
      <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
        {link.whereName}
      </a>
    </Link>
  ));

  return (
    <>
      <nav
        className={`flex items-center flex-wrap bg-black p-3 fixed top-0 left-0 w-full  ${
          hideNav ? "hidden" : ""
        }`}
        style={{ transition: "all 0.3s ease-in-out", zIndex: 10 }}
      >
        <Link href="/" legacyBehavior>
          <a className="inline-flex items-center p-2 mr-4">
            <Image src={logo} width={150} />
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
}

export default NavBar;