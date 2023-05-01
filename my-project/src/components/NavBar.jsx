import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const LinksCustom = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  );
};
const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <LinksCustom href="/" title="Home" className="mr-4"></LinksCustom>
        <LinksCustom
          href="/about"
          title="Nuestra Historia"
          className="mr-4"
        ></LinksCustom>
        <LinksCustom
          href="/products"
          title="Products"
          className="mr-4"
        ></LinksCustom>
      </nav>
      <Logo></Logo>
      <nav>
        <Link href="/" target={"_blank"}>
          Instagram
        </Link>
      </nav>
    </header>
  );
};
export default NavBar;
