import Image from "next/image";
import Logo from "../public/images/logo.svg";
import vector from "../public/images/vector.svg";
import x from "../public/images/x.svg";
import discord from "../public/images/discord.svg";
import Link from "next/link";
import tokens from "../public/images/tokens.svg";
import clients from "../public/images/users.svg";
import contributors from "../public/images/contributors.svg";
import providers from "../public/images/providers.svg";
import rectangle from "../public/images/rectangle.svg";
import InvoiceCard from "./InvoiceCard";
import FooterCard from "./FooterCard";

const footerCardContent = [
  {
    img: tokens,
    title: "Web3 startups running",
    subtitle: "token presales",
    borderColor: true
  },
  {
    img: clients,
    title: "Agencies billing global ",
    subtitle: "clients in stablecoins",
    borderColor: true
  },
  {
    img: contributors,
    title: "DAOs paying",
    subtitle: "contributors",
    borderColor: false
  },
  {
    img: providers,
    title: "Freelancers and digital",
    subtitle: "service providers worldwide",
    borderColor: true
  }
];

const Footer = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8 mt-12 md:mt-40">
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

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-14 pt-10">
          {footerCardContent.map((card, index) => (
            <FooterCard
              key={index}
              img={card.img}
              title={card.title}
              subtitle={card.subtitle}
              borderColor={card.borderColor}
            />
          ))}
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
