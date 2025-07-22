import React from "react";
import check from "../public/images/check.svg";
import invoice from "../public/images/invoice.svg";
import invoicesm from "../public/images/invoicesm.svg";
import rectangle from "../public/images/rectangle.svg";
import Image from "next/image";

const Invoicing = () => {
  return (
    <section
      className="bg-[#EDECF6] relative"
      style={{ backgroundImage: "url('/images/invoicinghero.png')" }}
    >
      <div className="flex flex-col w-full px-3 relative">
        <div className="flex flex-col lg:flex-row py-6 md:py-10 justify-between relative">
          <div className="flex flex-col gap-4 mb-40 lg:mb-0">
            <div className="flex gap-3 justify-center md:justify-start items-center">
              <Image src={rectangle} alt="Rectangle" />
              <p className="section-tag">Invoices</p>
              <Image src={rectangle} alt="Rectangle" />
            </div>

            <p className="invoice-title text-[32px] lg:text-[48px] text-center md:text-start">
              Smart Invoicing <br className="hidden md:block" />{" "}
              <span className="invoice-span">Dashboard</span>
            </p>

            <p className="invoice-top-description text-center md:text-start">
              Filter invoices by date, status, and client{" "}
              <br className="hidden md:block" /> Use advanced search and bulk
              actions <br className="hidden md:block" /> View every key data
              point in a clean table <br className="hidden md:block" /> (e.g.,
              item, payment method, order ID)
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex justify-start items-center gap-3">
                <Image src={check} alt="Check" />
                <p className="invoice-points">
                  Filter invoices by date, status, and client
                </p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <Image src={check} alt="Check" />
                <p className="invoice-points">
                  Use advanced search and bulk actions
                </p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <Image src={check} alt="Check" />
                <p className="invoice-points">
                  View every key data point in a clean table
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute right-0 py-15 w-full md:w-1/2">
          <Image src={invoice} alt="Invoice" />
        </div>

        <div className="flex md:hidden py-5 absolute right-0 top-9/13">
          <Image src={invoicesm} alt="Invoice" />
        </div>
      </div>
    </section>
  );
};

export default Invoicing;
