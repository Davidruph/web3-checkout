import Image from "next/image";
import rectangle from "../public/images/rectangle.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";
import bigimg from "../public/images/bigimg.svg";
import smallimg from "../public/images/hero-small.svg";
import ETHImage from "../public/images/Eth.svg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full px-3 pt-4 md:pt-12 lg:pt-8 pb-40 md:pb-52 flex flex-col items-center gap-5 z-10">
        {/* Tag */}
        <div className="flex gap-3 mt-0 lg:mt-3 justify-center md:justify-start items-center">
          <Image src={rectangle} alt="Rectangle" />
          <p className="section-tag">Crypto</p>
          <Image src={rectangle} alt="Rectangle" />
        </div>

        {/* Heading */}
        <p className="hero-intro text-[32px] md:text-[48px] text-center">
          <span className="hero-highlight">Seamless</span> Crypto Invoicing{" "}
          <br className="hidden md:block" /> for Modern{" "}
          <span className="hero-highlight">Businesses</span>
        </p>

        {/* Description */}
        <p className="hero-desc text-center lg:px-4 max-w-3xl">
          Collect, manage, and track crypto payments — effortlessly. From
          freelancers to global teams, <br className="hidden md:block" />
          Web3Checkout makes crypto billing professional, compliant, and easy.
        </p>

        {/* CTA */}
        <div className="flex gap-6 flex-row items-center justify-center mt-4 pb-48 md:pb-80">
          <div className="cursor-pointer relative inline-block rounded-full p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]">
            <Button className="pricing-btn-2 w-full cursor-pointer">
              Get Started <MdKeyboardArrowRight size={24} />
            </Button>
          </div>
          <button className="border-0 bg-transparent w-full cursor-pointer learn">
            Learn more
          </button>
        </div>
      </div>

      <div className="block md:hidden absolute bottom-5 z-0">
        <Image src={smallimg} alt="Small Hero Image" className="" />
      </div>
      
      <div className="block md:hidden absolute bottom-[275px] z-0">
        <Image src={ETHImage} alt="Small Hero Image" className="" />
      </div>

    </>
  );
};

export default Hero;
