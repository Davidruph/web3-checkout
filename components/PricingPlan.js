import React from "react";
import Image from "next/image";
import rectangle from "../public/images/rectangle.svg";

const PricingPlan = () => {
  return (
    <section className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8 mt-64 lg:mt-40">
      <div className="flex flex-col justify-center items-center pt-10 mb-5 gap-4">
        <div className="flex gap-3 justify-center items-center">
          <Image src={rectangle} alt="Rectangle" />
          <p className="section-tag">Pricing</p>
          <Image src={rectangle} alt="Rectangle" />
        </div>

        <p className="people-question text-[32px] lg:text-[48px]  font-bold">
          Pricing
          <span className="people-question-highlight">Plans</span>
        </p>

        <p className="people-description text-center">
          Collect, manage, and track crypto payments — effortlessly. From
          freelancers to global teams, <br className="hidden lg:block" />
          Web3Checkout makes crypto billing professional, compliant, and easy.
        </p>
      </div>
    </section>
  );
};

export default PricingPlan;
