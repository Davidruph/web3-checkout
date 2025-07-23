"use client";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MdKeyboardArrowRight } from "react-icons/md";

const InvoiceCard = () => {
  return (
    <Card
      className="bg-[#CECDE0] rounded-3xl shadow-none border-0 bg-no-repeat bg-cover bg-blend-normal lg:w-[95%] mx-auto"
      style={{ backgroundImage: "url('/images/invoicebg.svg')" }}
    >
      <CardContent className="flex flex-col items-center lg:py-5 justify-center gap-5">
        <p className="invoice-heading text-[24px] md:text-[32px]">
          Start Invoicing in{" "}
          <span className="invoice-time text-[24px] md:text-[32px]">
            60 Seconds
          </span>
        </p>

        <p className="invoice-description">
          Collect, manage, and track crypto payments — effortlessly. From
          freelancers to global teams, Web3Checkout
        </p>

        <div className="relative inline-block rounded-full p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629] w-auto">
          <Button className="invoice-ctaaa w-[245px]">
            Create a Free Invoice <MdKeyboardArrowRight size={24} />
          </Button>
        </div>

        <p className="invoice-kyc">
          No <span className="span-kyc">KYC Needed</span> · Instant Setup ·{" "}
          <span className="span-kyc">Web3 Ready</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default InvoiceCard;
