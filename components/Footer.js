"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import vector from "../public/images/vector.svg";
import x from "../public/images/x.svg";
import discord from "../public/images/discord.svg";
import Link from "next/link";
import tokensDark from "../public/images/tokens.svg";
import tokensLight from "../public/images/tokensLight.svg";
import clientsDark from "../public/images/users.svg";
import clientsLight from "../public/images/clientsLight.svg";
import contributorsLight from "../public/images/contributors.svg";
import providersDark from "../public/images/providers.svg";
import providersLight from "../public/images/providersLight.svg";

import rectangle from "../public/images/rectangle.svg";
import InvoiceCard from "./InvoiceCard";
import FooterCard from "./FooterCard";
import SmallFooterCard from "./SmallFooterCard";
import tokensm from "../public/images/tokensm.svg";
import usersm from "../public/images/usersm.svg";

const footerCardContent = [
  {
    imgLight: tokensLight,
    imgDark: tokensDark,
    title: "Web3 startups running",
    subtitle: "token presales"
  },
  {
    imgLight: clientsLight,
    imgDark: clientsDark,
    title: "Agencies billing global ",
    subtitle: "clients in stablecoins"
  },
  {
    imgLight: contributorsLight,
    imgDark: contributorsLight,
    title: "DAOs paying",
    subtitle: "contributors"
  },
  {
    imgLight: providersLight,
    imgDark: providersDark,
    title: "Freelancers and digital",
    subtitle: "service providers worldwide"
  }
];

const smallfooterCardContent = [
  {
    img: tokensLight,
    title: "Web3 startups running",
    subtitle: "token presales",
    borderColor: true
  },
  {
    img: clientsLight,
    title: "Agencies billing global ",
    subtitle: "clients in stablecoins",
    borderColor: true
  },
  {
    img: contributorsLight,
    title: "DAOs paying",
    subtitle: "contributors",
    borderColor: false
  },
  {
    img: providersLight,
    title: "Freelancers and digital",
    subtitle: "service providers worldwide",
    borderColor: true
  }
];

const Footer = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 250 + 16; // Card width + gap (adjust if different)

  // Scroll handler to update active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  // Scroll to a specific card when dot is clicked
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="container mx-auto flex flex-col w-full px-3 lg:px-5 mt-12 md:mt-40">
        <div className="flex flex-col justify-center items-center pt-10 mb-5 gap-4">
          <div className="flex gap-3 justify-center items-center">
            <Image src={rectangle} alt="Rectangle" />
            <p className="section-tag">People</p>
            <Image src={rectangle} alt="Rectangle" />
          </div>

          <p className="people-question text-[32px] md:text-[48px] font-bold">
            Who’s <span className="people-question-highlight">It For?</span>
          </p>

          <p className="people-description text-center">
            Collect, manage, and track crypto payments — effortlessly. From
            freelancers to global teams, Web3Checkout makes crypto billing
            professional, compliant, and easy.
          </p>
        </div>

        <div className="hidden w-full md:flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-14 pt-10">
            {footerCardContent.map((card, index) => (
              <FooterCard
                key={index}
                imgLight={card.imgLight}
                imgDark={card.imgDark}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>

        <div className="w-full block md:hidden">
          <div
            ref={scrollRef}
            className="w-full flex gap-4 mb-10 pt-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {smallfooterCardContent.map((card, index) => (
              <SmallFooterCard
                key={index}
                img={card.img}
                title={card.title}
                subtitle={card.subtitle}
                borderColor={card.borderColor}
              />
            ))}
          </div>
          <div className="flex justify-center gap-3 mb-10">
            {smallfooterCardContent.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-2 w-2 border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#FF862A] scale-110 w-[27px]"
                    : "bg-gray-400 w-[12px]"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <InvoiceCard />
        <div className="w-full justify-center md:justify-between gap-5 md:gap-0 flex flex-col md:flex-row items-center py-8">
          <p className="font-[var(--font-axiforma)] copyright-text">
            Copyright © 2022. All rights reserved
          </p>
          <Image src={Logo} alt="Logo" />

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
      </section>
    </>
  );
};

export default Footer;
