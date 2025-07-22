"use client";

import rectangle from "../public/images/rectangle.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useState } from "react";
import wallet from "../public/images/wallet.svg";
import { FiUser, FiLock } from "react-icons/fi";
import smalluser from "../public/images/small-user.svg";
import password from "../public/images/password.svg";
import usdIcon from "../public/images/diamond.svg";
import demo from "../public/images/demo.svg";

const GenerateInvoice = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("USD");

  const currencies = ["USD", "EUR", "NGN"];

  return (
    <>
      <section>
        <div className="flex flex-col w-full px-3 py-20">
          <div className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-2 md:justify-between">
            <div className="w-full flex flex-col justify-start gap-5">
              <div className="flex gap-3 justify-center md:justify-start items-center">
                <Image src={rectangle} alt="Rectangle" />
                <p className="section-tag">Invoice Generate</p>
                <Image src={rectangle} alt="Rectangle" />
              </div>

              <p className="intro-invoice text-[32px] md:text-[48px] text-center md:text-start">
                <span className="hero-highlight">Start</span> Accepting{" "}
                <br className="hidden md:block" /> Payments
              </p>

              <div className="bg-[#CECDE04D] gen-box w-full max-w-[577px]">
                <p className="gen-text">
                  {" "}
                  Create your <span className="gen-highlight">
                    invoice →
                  </span>{" "}
                  Connect your <span className="gen-highlight">wallet →</span>{" "}
                  Collect crypto {""}
                  <span className="gen-highlight">instantly</span>
                </p>
              </div>
              <span className="gen-highlight"></span>

              <p className="generate_invoice_text text-center md:text-start">
                Collect, manage, and track crypto payments — effortlessly. From{" "}
                <br className="hidden md:block" />
                freelancers to global teams, Web3Checkout makes crypto billing{" "}
                <br className="hidden md:block" />
                professional, compliant, and easy.
              </p>

              <div className="flex gap-5 flex-row items-center justify-start">
                <div className="cursor-pointer relative inline-block rounded-full p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]">
                  <Button className="pricing-btn-2 w-full cursor-pointer">
                    Get Started <MdKeyboardArrowRight size={24} />
                  </Button>
                </div>
                <button className="border-0 w-auto bg-transparent cursor-pointer learn text-[#FF8C4A]">
                  Learn more
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative w-full max-w-[680px]">
              <div className="absolute right-12 top-8 z-0">
                <div className="relative">
                  <Image src={demo} alt="demo" />
                  <p className="absolute inset-0 mb-12 ml-13 flex items-center justify-center demo-text">
                    Demo Version
                  </p>
                </div>
              </div>

              <div
                className="relative w-full bg-no-repeat bg-center bg-contain z-10 min-h-fit"
                style={{ backgroundImage: "url('/images/invoicegen.svg')" }}
              >
                <div className="w-full content p-2 lg:p-10">
                  <p className="intro-invoice text-[24px] md:text-[32px] text-center md:text-start">
                    <span className="hero-highlight">Invoice </span>
                    Generator
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <button className="flex gap-1 items-center invoice_try_btn text-[#FF8C4A]">
                      <MdKeyboardArrowRight size={24} />
                      Try It Now
                    </button>
                  </div>

                  <div className="w-full flex flex-col gap-5 mt-10">
                    <div className="w-full flex-col gap-5 relative">
                      <label className="invoice_label flex items-center gap-3 pb-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0581 7.97496L9.99974 2.91663L4.94141 7.97496"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 17.0834V3.05835"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Amount
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          className="label-input w-full pr-24"
                          placeholder="Enter amount"
                        />

                        <button
                          type="button"
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 bg-transparent px-3 py-1 rounded-full hover:bg-gray-200 transition"
                        >
                          <Image src={usdIcon} alt="Currency" />
                          <svg
                            className={`w-4 h-4 transform transition-transform ${
                              showDropdown ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {showDropdown && (
                          <div className="absolute right-2 top-[105%] z-10 w-28 bg-white border rounded shadow-lg py-1">
                            {currencies.map((currency) => (
                              <button
                                key={currency}
                                onClick={() => {
                                  setSelected(currency);
                                  setShowDropdown(false);
                                }}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                              >
                                {currency}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full flex-col gap-5">
                      <label className="invoice_label flex items-center gap-3 pb-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16669 8.33329H5.83335C7.50002 8.33329 8.33335 7.49996 8.33335 5.83329V4.16663C8.33335 2.49996 7.50002 1.66663 5.83335 1.66663H4.16669C2.50002 1.66663 1.66669 2.49996 1.66669 4.16663V5.83329C1.66669 7.49996 2.50002 8.33329 4.16669 8.33329Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.1667 8.33329H15.8334C17.5 8.33329 18.3334 7.49996 18.3334 5.83329V4.16663C18.3334 2.49996 17.5 1.66663 15.8334 1.66663H14.1667C12.5 1.66663 11.6667 2.49996 11.6667 4.16663V5.83329C11.6667 7.49996 12.5 8.33329 14.1667 8.33329Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.1667 18.3333H15.8334C17.5 18.3333 18.3334 17.5 18.3334 15.8333V14.1666C18.3334 12.5 17.5 11.6666 15.8334 11.6666H14.1667C12.5 11.6666 11.6667 12.5 11.6667 14.1666V15.8333C11.6667 17.5 12.5 18.3333 14.1667 18.3333Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.16669 18.3333H5.83335C7.50002 18.3333 8.33335 17.5 8.33335 15.8333V14.1666C8.33335 12.5 7.50002 11.6666 5.83335 11.6666H4.16669C2.50002 11.6666 1.66669 12.5 1.66669 14.1666V15.8333C1.66669 17.5 2.50002 18.3333 4.16669 18.3333Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Categories
                      </label>
                      <Input
                        className="label-input"
                        placeholder="Graphic Design"
                      />
                    </div>

                    <div className="w-full">
                      <div className="w-full flex justify-center md:justify-end">
                        <button
                          className="generate-btn flex items-center justify-center text-white mt-3 w-full md:w-[217px] cursor-pointer"
                          onClick={() => SetIsOpen(true)}
                        >
                          Generate Invoice <MdKeyboardArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex lg:hidden flex-col justify-center items-center pt-4">
              <div className="z-0 -mb-18">
                <div className="relative">
                  <Image src={demo} alt="demo" />
                  <p className="absolute inset-0 mb-16 flex items-center justify-center demo-text">
                    Demo Version
                  </p>
                </div>
              </div>

              <div className="bg-white z-99 w-full max-w-[680px] rounded-[20px] border border-[#c2bcba] p-5 shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">
                <p className="intro-invoice text-[24px] md:text-[32px] text-center md:text-start">
                  <span className="hero-highlight">Invoice </span>
                  Generator
                </p>
                <div className="flex justify-center md:justify-start">
                  {" "}
                  <button className="flex gap-1 items-center invoice_try_btn text-[#FF8C4A]">
                    {" "}
                    <MdKeyboardArrowRight size={24} />
                    Try It Now
                  </button>
                </div>

                <div className="w-full flex flex-col gap-5 mt-10">
                  <div className="w-full flex-col gap-5 relative">
                    <label className="invoice_label flex items-center gap-3 pb-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.0581 7.97496L9.99974 2.91663L4.94141 7.97496"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 17.0834V3.05835"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Amount
                    </label>

                    {/* Input container with embedded button and dropdown */}
                    <div className="relative">
                      <input
                        type="text"
                        className="label-input w-full pr-24"
                        placeholder="Enter amount"
                      />

                      {/* Currency selector (image + text) */}
                      <button
                        type="button"
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 bg-transparent px-3 py-1 rounded-full hover:bg-gray-200 transition"
                      >
                        <Image
                          src={usdIcon}
                          alt="Currency"
                          // width={20}
                          // height={20}
                        />
                        {/* <span className="text-sm font-medium">{selected}</span> */}
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            showDropdown ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown list */}
                      {showDropdown && (
                        <div className="absolute right-2 top-[105%] z-10 w-28 bg-white border rounded shadow-lg py-1">
                          {currencies.map((currency) => (
                            <button
                              key={currency}
                              onClick={() => {
                                setSelected(currency);
                                setShowDropdown(false);
                              }}
                              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {currency}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full flex-col gap-5">
                    <label className="invoice_label flex items-center gap-3 pb-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16669 8.33329H5.83335C7.50002 8.33329 8.33335 7.49996 8.33335 5.83329V4.16663C8.33335 2.49996 7.50002 1.66663 5.83335 1.66663H4.16669C2.50002 1.66663 1.66669 2.49996 1.66669 4.16663V5.83329C1.66669 7.49996 2.50002 8.33329 4.16669 8.33329Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.1667 8.33329H15.8334C17.5 8.33329 18.3334 7.49996 18.3334 5.83329V4.16663C18.3334 2.49996 17.5 1.66663 15.8334 1.66663H14.1667C12.5 1.66663 11.6667 2.49996 11.6667 4.16663V5.83329C11.6667 7.49996 12.5 8.33329 14.1667 8.33329Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.1667 18.3333H15.8334C17.5 18.3333 18.3334 17.5 18.3334 15.8333V14.1666C18.3334 12.5 17.5 11.6666 15.8334 11.6666H14.1667C12.5 11.6666 11.6667 12.5 11.6667 14.1666V15.8333C11.6667 17.5 12.5 18.3333 14.1667 18.3333Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.16669 18.3333H5.83335C7.50002 18.3333 8.33335 17.5 8.33335 15.8333V14.1666C8.33335 12.5 7.50002 11.6666 5.83335 11.6666H4.16669C2.50002 11.6666 1.66669 12.5 1.66669 14.1666V15.8333C1.66669 17.5 2.50002 18.3333 4.16669 18.3333Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Categories
                    </label>
                    <Input
                      className="label-input"
                      placeholder="Graphic Design"
                    />
                  </div>

                  <div className="w-full">
                    <div className="w-full flex justify-center md:justify-end">
                      <button
                        className="generate-btn flex items-center justify-center text-white mt-3 w-full md:w-[217px] cursor-pointer"
                        onClick={() => SetIsOpen(true)}
                      >
                        Generate Invoice <MdKeyboardArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog open={isOpen} onOpenChange={SetIsOpen} className="z-99">
          <DialogContent
            className="max-w-[850px] w-full p-0 overflow-hidden"
            overlayClassName="bg-black/70"
          >
            {/* Custom Header */}
            <div className="bg-[#FDF8F3] px-6 py-4 relative">
              <DialogTitle asChild>
                <div>
                  <p className="intro-invoice text-[24px] md:text-[32px]">
                    <span className="hero-highlight">Invoice </span>
                    Generator
                  </p>
                  <p className="generate_invoice_text text-sm">
                    Create your invoice, Connect your wallet, and Collect crypto
                    instantly.
                  </p>
                </div>
              </DialogTitle>
            </div>

            {/* Body */}
            <div className="px-6 py-3 bg-white">
              <DialogDescription>
                <div className="flex flex-col gap-3">
                  {/* Username */}
                  <div className="flex flex-col w-full gap-2">
                    <label className="modal-label">Username</label>
                    <div className="relative w-full">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <Image src={smalluser} />
                      </span>
                      <Input
                        type="text"
                        placeholder="Enter Your Username"
                        className="modal-inp pl-10"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-col w-full gap-2">
                    <label className="modal-label">Password</label>
                    <div className="relative w-full">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <Image src={password} />
                      </span>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="modal-inp pl-10 pr-16"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 modal-text text-[#FF8629] cursor-pointer"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between flex-col md:flex-row gap-2 items-center mt-8">
                  <p className="modal-text">
                    Don't you have an account yet?{" "}
                    <span className="text-[#FF8629]"> Register</span>
                  </p>
                  <div className="cursor-pointer relative inline-block rounded-full p-[5px] bg-gradient-to-br from-[#FFD729] to-[#FF8629]">
                    <Button className="pricing-btn-2 w-full cursor-pointer">
                      Login <MdKeyboardArrowRight size={24} />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center my-3">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="mx-4 text-gray-500 text-sm">Or</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                <div className="w-full flex justify-center md:justify-end pb-2">
                  <button className="generate-btn flex items-center justify-center text-white mt-3 w-full cursor-pointer">
                    <Image src={wallet} alt="wallet" /> Connect Your Wallet
                  </button>
                </div>
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default GenerateInvoice;
