import React from "react";
import Image from "next/image";
import rectangle from "../public/images/rectangle.svg";
import free from "../public/images/free.svg";
import freesm from "../public/images/free-sm.svg";
import pro from "../public/images/pro.svg";
import tickfree from "../public/images/tickfree.svg";
import tickpro from "../public/images/tick-pro.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";
import prosm from "../public/images/pro-sm.svg";
import recommend from "../public/images/recommend.svg";
import recommendsm from "../public/images/recommendsm.svg";

const PricingPlan = () => {
  return (
    <section className="z-99 mt-[300px] md:mt-28 lg:mt-40 relative">
      <div className="flex flex-col w-full px-3">
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
      </div>

      <div className="mb-5 relative z-1 w-full flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center pt-10 px-3 lg:px-5">
        <div className="flex flex-col justify-center border rounded-[20px] w-full max-w-[500px] p-3 md:p-5 bg-white shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">
          <div
            className="hidden md:flex flex-col gap-3 justify-center items-center"
            alt="free"
          >
            <Image src={free} alt="free" />
            <div>
              <p className="pricing-tag mb-3">Built for Scale</p>
              <p className="pricing-title text-[24px] md:text-[32px]">
                Free Plan
              </p>
            </div>
          </div>

          <div
            className="flex gap-3 md:hidden justify-center items-center"
            alt="free"
          >
            <Image src={freesm} alt="free" />
            <div>
              <p className="pricing-tag mb-3">Built for Scale</p>
              <p className="pricing-title text-[24px] md:text-[32px]">
                Free Plan
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-10 w-full gap-3 max-w-[436px]">
            <div className="flex gap-4 items-center">
              <Image src={tickfree} alt="tickfree" />
              <p className="pricing-feature">Unlimited Everything</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickfree} alt="tickfree" />
              <p className="pricing-feature">Accept any crypto</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickfree} alt="tickfree" />
              <p className="pricing-feature">Wallet Connect Integration</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickfree} alt="tickfree" />
              <p className="pricing-feature">Non-custodial checkout</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickfree} alt="tickfree" />
              <p className="pricing-feature">EOA (KYC users only)</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickfree} alt="tickfree" />
              <p className="pricing-feature">Web3Checkout branding</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickfree} alt="tickfree" />
              <p className="pricing-feature">Upgrade for PDF Export</p>
            </div>
          </div>

          <button className="pricing-btn-1 mt-8 mb-2 cursor-pointer flex gap-3 items-center justify-center">
            Get Started
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>

        <div className="flex flex-col justify-center border rounded-[20px] w-full max-w-[500px] p-3 md:p-5 bg-white shadow-[6px_6px_0px_rgba(0,0,0,0.1)] relative">
          <div className="absolute top-1 md:top-5 -left-3 md:-left-4">
            <Image src={recommend} alt="recommend" className="hidden md:flex" />
            <Image
              src={recommendsm}
              alt="recommend"
              className="flex md:hidden"
            />
          </div>
          <div
            className="hidden md:flex flex-col gap-3 justify-center items-center"
            alt="free"
          >
            <Image src={pro} alt="pro" />
            <div>
              <p className="pricing-tag mb-3">
                Pro Plan (<span className="font-bold">$99/month</span>)
              </p>
              <p className="pricing-title text-[24px] md:text-[32px] text-[#FF8629]">
                Pro Plan
              </p>
            </div>
          </div>

          <div className="flex mt-10 gap-3 md:hidden justify-center items-center">
            <Image src={prosm} alt="pro" />
            <div>
              <p className="pricing-tag mb-3">
                Pro Plan (<span className="font-bold">$99/month</span>)
              </p>
              <p className="pricing-title text-[24px] md:text-[32px] text-[#FF8629]">
                Pro Plan
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-10 w-full gap-3 max-w-[436px]">
            <div className="flex gap-4 items-center">
              <Image src={tickpro} alt="tickpro" />
              <p className="pricing-feature">Everything in Free Plan</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickpro} alt="tickpro" />
              <p className="pricing-feature">API Access</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickpro} alt="tickpro" />
              <p className="pricing-feature">Custom Branding</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickpro} alt="tickpro" />
              <p className="pricing-feature">All Wallet Types Supported</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickpro} alt="tickpro" />
              <p className="pricing-feature">PDF Export + History</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickpro} alt="tickpro" />
              <p className="pricing-feature">Custom Domain Integration</p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={tickpro} alt="tickpro" />
              <p className="pricing-feature">24/7 Dedicated Support</p>
            </div>
          </div>

          <div className="mt-6 mb-2 cursor-pointer relative inline-block rounded-full p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]">
            <Button className="pricing-btn-2 w-full cursor-pointer">
              Get Started <MdKeyboardArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
