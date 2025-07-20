"use client";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const InvoiceCard = () => {
  return (
    <Card className="bg-[#CECDE0] invoice-card border">
      <CardContent className="flex flex-col items-center justify-center gap-4">
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

        <div className="relative inline-block rounded-full p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]">
          <Button className="invoice-cta">Create a Free Invoice</Button>
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
