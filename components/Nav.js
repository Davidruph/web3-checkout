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
  { title: "Home", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Contact", href: "#" },
  {
    title: "Pricing",
    href: "#",
    dropdown: [
      { label: "Free Plan", href: "#" },
      { label: "Pro Plan", href: "#" },
      { label: "Enterprise", href: "#" }
    ]
  }
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Nav */}
      <div className="hidden w-full lg:w-[95%] mx-auto justify-center md:justify-between gap-5 md:gap-0 md:flex flex-col md:flex-row items-center pt-8">
        <Image src={logo} alt="Logo" />

        <div className="hidden md:flex nav-box lg:w-[510px] md:w-[400px] h-[62px] rounded-[62px] justify-around items-center bg-white shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">
          {menus.map((menu, index) => (
            <div key={index} className="relative group">
              {!menu.dropdown ? (
                <a
                  href={menu.href}
                  className="mr-2 navlinks transition hover:font-bold"
                >
                  {menu.title}
                </a>
              ) : (
                <>
                  <button className="pl-2 navlinks flex items-center gap-1 transition hover:font-bold">
                    {menu.title}
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                    {menu.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="social-icons flex gap-10 lg:gap-10 md:gap-6 justify-center items-center">
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

      {/* Mobile Nav Toggle */}
      <div className="flex md:hidden justify-between py-8">
        <Image src={logo} alt="Logo" />
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <Image src={menu} alt="menu" />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="mt-2 md:hidden bg-white rounded-xl shadow-lg py-4 px-6 z-50 transition-all duration-300">
          {menus.map((menu, index) => (
            <div key={index} className="mb-2">
              {!menu.dropdown ? (
                <a
                  href={menu.href}
                  className="block py-2 text-center navlinks transition hover:font-bold"
                >
                  {menu.title}
                </a>
              ) : (
                <>
                  <button
                    onClick={() => setPricingOpen(!pricingOpen)}
                    className="flex justify-between items-center w-full py-2 px-2 text-center navlinks transition hover:font-bold"
                  >
                    {menu.title}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        pricingOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {pricingOpen && (
                    <div className="pl-4">
                      {menu.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-black transition"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
