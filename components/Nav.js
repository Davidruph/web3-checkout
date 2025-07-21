"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.svg";
import vector from "../public/images/vector.svg";
import x from "../public/images/x.svg";
import discord from "../public/images/discord.svg";
import menu from "../public/images/menu-btn.svg";
import { useState } from "react";

const menus = [
  { title: "Home" },
  { title: "About Us" },
  { title: "Contact" },
  { title: "Pricing" }
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="hidden w-full justify-center md:justify-between gap-5 md:gap-0 md:flex flex-col md:flex-row items-center py-6">
        <Image src={logo} alt="Logo" />

        <div className="hidden md:flex nav-box w-[510px] h-[62px] rounded-[62px] justify-around items-center bg-white shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">
          {menus.map(({ title }) => (
            <a
              key={title}
              href="#"
              className="navlinks transition hover:font-bold"
            >
              {title}
            </a>
          ))}
        </div>

        <div className="social-icons flex gap-10 justify-center items-center">
          <Link href="#" className="social-icon">
            <Image src={vector} alt="vector" />
          </Link>
          <Link href="#" className="social-icon">
            <Image src={x} alt="x" />
          </Link>
          <Link href="#" className="social-icon">
            <Image src={discord} alt="discord" />
          </Link>
        </div>
      </div>

      <div className="flex md:hidden justify-between py-8">
        <Image src={logo} alt="Logo" />
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <Image src={menu} alt="menu" />
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 md:hidden bg-white rounded-xl shadow-lg py-4 px-6 z-50 transition-all duration-300">
          {menus.map(({ title }) => (
            <a
              key={title}
              href="#"
              className="block py-2 text-center navlinks transition hover:font-bold"
            >
              {title}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
