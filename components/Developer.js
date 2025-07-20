import React from "react";
import Image from "next/image";
import rectangle from "../public/images/rectangle.svg";
import code from "../public/images/code.svg";

const Developer = () => {
  return (
    <section className="bg-[#F6EEE6] relative -mt-30 z-0">
      <div className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8 pt-24">
        <div className="flex flex-col justify-center items-center pt-10 gap-4 mb-24 md:mb-40">
          <div className="flex gap-3 justify-center items-center">
            <Image src={rectangle} alt="Rectangle" />
            <p className="section-tag">Developer</p>
            <Image src={rectangle} alt="Rectangle" />
          </div>

          <p className="people-question text-[32px] lg:text-[48px]  font-bold">
            <span className="people-question-highlight">
              Developer-Friendly
            </span>
          </p>

          <p className="people-description text-center">
            Web3Checkout is API-first. Developers can programmatically generate
            and manage invoices with custom <br className="hidden lg:block" />{" "}
            branding, domain integration, and webhook support.
          </p>
        </div>
      </div>
      <div className="hidden w-full md:flex absolute justify-center items-center top-7/10">
        <Image src={code} alt="code" className="w-75 md:w-full max-w-[642px]" />
      </div>
      <div className="w-full flex md:hidden absolute justify-center items-center top-9/10">
        <Image src={code} alt="code" className="w-75 md:w-full max-w-[642px]" />
      </div>
    </section>
  );
};

export default Developer;
