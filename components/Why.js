import WhyCheckoutCard from "./WhyCheckoutCard";
import SmallWhyCheckoutCard from "./SmallWhyCheckoutCard";
import Image from "next/image";
import send from "../public/images/send.svg";
import stats from "../public/images/stats.svg";
import turbo from "../public/images/turbo.svg";
import sendsm from "../public/images/sendsm.svg";
import statssm from "../public/images/statssm.svg";
import turbosm from "../public/images/turbosm.svg";
import logo from "../public/images/logo.svg";

const Why = () => {
  return (
    <section className="flex flex-col w-full px-3 lg:px-5">
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
  );
};

export default Why;
