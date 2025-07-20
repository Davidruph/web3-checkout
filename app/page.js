import Footer from "@/components/Footer";
import InvoiceCard from "@/components/InvoiceCard";
import FooterCard from "@/components/FooterCard";
import WhyCheckoutCard from "@/components/WhyCheckoutCard";
import SmallWhyCheckoutCard from "@/components/SmallWhyCheckoutCard";
import tokens from "../public/images/tokens.svg";
import clients from "../public/images/users.svg";
import contributors from "../public/images/contributors.svg";
import providers from "../public/images/providers.svg";
import rectangle from "../public/images/rectangle.svg";
import Image from "next/image";
import send from "../public/images/send.svg";
import stats from "../public/images/stats.svg";
import turbo from "../public/images/turbo.svg";
import sendsm from "../public/images/sendsm.svg";
import statssm from "../public/images/statssm.svg";
import turbosm from "../public/images/turbosm.svg";
import logo from "../public/images/logo.svg";
import check from "../public/images/check.svg";
import invoice from "../public/images/invoice.svg";
import invoicesm from "../public/images/invoicesm.svg";

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

export default function Home() {
  return (
    <>
      <section className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8">
        <div className="flex flex-col mb-5 gap-4 items-center justify-center mt-10">
          <Image src={logo} alt="logo" />
          <p className="why-topic text-[32px] lg:text-[48px]">
            Why <span className="why-main">WEB3CHECKOUT</span>
          </p>
          <p className="people-description text-center">
            Collect, manage, and track crypto payments — effortlessly. From
            freelancers to global teams, <br className="hidden md:block" />{" "}
            Web3Checkout makes crypto billing professional, compliant, and easy.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 pt-10">
          <WhyCheckoutCard
            img={send}
            title="Create & Send"
            subtitle="Generate polished <span class='font-bold'>crypto invoices</span> in just a few clicks."
            borderColor={true}
            span="Create & Send"
          />
          <WhyCheckoutCard
            img={stats}
            title="Track"
            subtitle="Get <span class='font-bold'>real-time updates</span> on status (Paid, Unpaid, Partially Paid, etc.)."
            borderColor={false}
            span="Everything"
          />
          <WhyCheckoutCard
            img={turbo}
            title="Export-Ready"
            subtitle="Download detailed reports in PDF or CSV."
            borderColor={true}
            span="for Accounting"
          />
        </div>

        <div className="flex flex-col gap-3 mb-14 md:hidden">
          <SmallWhyCheckoutCard
            img={sendsm}
            title="Create & Send"
            subtitle="Generate polished <span class='font-bold'>crypto invoices</span> in just a few clicks."
            borderColor={false}
            span="Create & Send"
          />
          <SmallWhyCheckoutCard
            img={statssm}
            title="Track"
            subtitle="Get <span class='font-bold'>real-time updates</span> on status (Paid, Unpaid, Partially Paid, etc.)."
            borderColor={true}
            span="Everything"
          />
          <SmallWhyCheckoutCard
            img={turbosm}
            title="Export-Ready"
            subtitle="Download detailed reports in PDF or CSV."
            borderColor={false}
            span="for Accounting"
          />
        </div>
      </section>

      <section className="bg-[#EDECF6] relative">
        <div className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8 relative">
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

      <section className="bg-[#F6EEE6]">
        <div className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8">
          <div className="flex flex-col justify-center items-center pt-10 mb-5 gap-4">
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
              Web3Checkout is API-first. Developers can programmatically
              generate and manage invoices with custom{" "}
              <br className="hidden lg:block" /> branding, domain integration,
              and webhook support.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8">
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
        <Footer />
      </section>
    </>
  );
}
