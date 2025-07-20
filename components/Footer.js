import Image from "next/image";
import Logo from "../public/images/logo.svg";
import vector from "../public/images/vector.svg";
import x from "../public/images/x.svg";
import discord from "../public/images/discord.svg";
import Link from "next/link";

const Footer = () => {
  return (
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
  );
};

export default Footer;
